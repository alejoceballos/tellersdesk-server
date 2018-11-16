// Frameworks dependencies
const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const JSONAPIError = require('jsonapi-serializer').Error;

// Story structures dependencies
const service = require('../models/story/story-service');
const Character = require('../models/story/story-model');
const { serializer, deserializer } = require('../models/story/story-serializer');

// Generic functions declaration
const deserialize = data => deserializer.deserialize(data);
const newInstance = (type, data) => type.newInstance(data);
const newError = (code, title, detail) => new JSONAPIError({code, title, detail});

// Character specific functions declarations
const create = instance => service.create(instance);
const update = instance => service.update(instance);
const remove = id => service.remove(id);
const serialize = data => serializer.serialize(data);
const creationError = detail => newError('004', 'Could not add story', detail);
const updateError = detail => newError('005', 'Could not update story', detail);
const deleteError = detail => newError('006', 'Could not delete story', detail);

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
            const instance = newInstance(Character, data);
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
 * GET stories listing
 */
router.get('/', async function (req, res /*, next*/) {
    const instances = await service.findAll();
    const serialized = serialize(instances);

    res.send(serialized);
});

/**
 * GET story
 */
router.get('/:id', async function (req, res /*, next*/) {
    const instance = await service.findById(req.params.id);
    const serialized = serialize(instance);

    res.send(serialized);
});

/**
 * POST new story
 */
router.post('/', function (req, res) {
    persist(req, res, instance => create(instance), HttpStatus.CREATED, err => creationError(err.message));
});

/**
 * PATCH existing story
 */
router.patch('/:id', function(req, res) {
    persist(req, res, instance => update(instance), HttpStatus.OK, err => updateError(err.message));
});

/**
 * DELETE existing story
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

module.exports = router;
