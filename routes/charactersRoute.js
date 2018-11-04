// Frameworks dependencies
const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const JSONAPIError = require('jsonapi-serializer').Error;

// Character structures dependencies
const service = require('../models/character/character-service');
const Character = require('../models/character/character-model');
const { serializer, deserializer } = require('../models/character/character-serializer');

// Generic functions declaration
const deserialize = data => deserializer.deserialize(data);
const newInstance = (type, data) => type.newInstance(data);
const newError = (code, title, detail) => new JSONAPIError({code, title, detail});

// Character specific functions declarations
const create = instance => service.create(instance);
const update = instance => service.update(instance);
const remove = id => service.remove(id);
const serialize = data => serializer.serialize(data);
const creationError = detail => newError('001', 'Could not add character', detail);
const updateError = detail => newError('002', 'Could not update character', detail);
const deleteError = detail => newError('003', 'Could not delete character', detail);

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
            const persisted = persist(instance);
            const serialized = serialize(persisted);

            res.status(successStatus).send(serialized);
        } catch (err) {
            const error = retrieveError(err.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    });
};

/**
 * GET characters listing
 */
router.get('/', function (req, res /*, next*/) {
    res.send(serialize(service.findAll()));
});

/**
 * POST new character
 */
router.post('/', function (req, res) {
    persist(req, res, instance => create(instance), HttpStatus.CREATED, err => creationError(err.message));
});

/**
 * PATCH existing character
 */
router.patch('/:id', function(req, res) {
    persist(req, res, instance => update(instance), HttpStatus.OK, err => updateError(err.message));
});

/**
 * DELETE existing character
 */
router.delete('/:id', function(req, res) {
    try {
        remove(req.params.id);
        res.status(HttpStatus.NO_CONTENT).send();
    } catch (err) {
        const error = deleteError(err.message);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
});

module.exports = router;
