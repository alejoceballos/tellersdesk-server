const HttpStatus = require('http-status-codes');
const JSONAPIError = require('jsonapi-serializer').Error;
const modelSerializer = require('../models/base-model-serializer');

const newInstance = (type, data) => type.newInstance(data);
const newError = (code, title, detail) => new JSONAPIError({code, title, detail});

module.exports = function(router, params) {
    const { serializer, deserializer } = modelSerializer(params.jsonApi.type, params.jsonApi.options);

    // Generic functions declaration
    const deserialize = data => deserializer.deserialize(data);
    const serialize = data => serializer.serialize(data);

    // Model specific functions declarations
    const create = instance => params.service.create(instance);
    const update = instance => params.service.update(instance);
    const remove = id => params.service.remove(id);

    const creationError = detail => newError(params.errors.create.id, params.errors.create.message, detail);
    const updateError = detail => newError(params.errors.update.id, params.errors.update.message, detail);
    const deleteError = detail => newError(params.errors.delete.id, params.errors.delete.message, detail);

    /**
     * References:
     *  + https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#request-body
     *  + https://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
     */
    const persist = (req, res, persist, successStatus, retrieveError) => {
        let rawData = '';
        req.on('data', chunk => rawData += chunk);
        req.on('end', async () => {
            const data = await deserialize(JSON.parse(rawData));

            try {
                const instance = newInstance(params.modelClass, data);
                const persisted = await persist(instance);
                const serialized = serialize(persisted);

                res.status(successStatus).send(serialized);
            } catch (err) {
                const error = retrieveError(err.message);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
            }
        });
    };

    /**
     * GET - Find All
     */
    router.get('/', async function (req, res /*, next*/) {
        const instances = await params.service.findAll();
        const serialized = serialize(instances);

        res.send(serialized);
    });

    /**
     * GET - Find One
     */
    router.get('/:id', async function (req, res /*, next*/) {
        const instance = await params.service.findById(req.params.id);
        const serialized = serialize(instance);

        res.send(serialized);
    });

    /**
     * POST - Create
     */
    router.post('/', function (req, res) {
        persist(req, res, instance => create(instance), HttpStatus.CREATED, err => creationError(err.message));
    });

    /**
     * PATCH - Update
     */
    router.patch('/:id', function(req, res) {
        persist(req, res, instance => update(instance), HttpStatus.OK, err => updateError(err.message));
    });

    /**
     * DELETE - Delete
     */
    router.delete('/:id', async function(req, res) {
        try {
            await remove(req.params.id);
            res.status(HttpStatus.NO_CONTENT).send();
        } catch (err) {
            const error = deleteError(err.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    });

    return router;
};
