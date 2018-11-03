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
const serialize = data => serializer.serialize(data);
const creationError = detail => newError('001', 'Could not add character', detail);

/**
 * GET characters listing
 */
router.get('/', function (req, res /*, next*/) {
    res.send(serialize(service.findAll()));
});

/**
 * POST new character
 *
 * References:
 *  + https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#request-body
 *  + https://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
 */
router.post('/', function (req, res) {
    let body = '';
    req.on('data', data => body += data);
    req.on('end', async () => {
        const data = await deserialize(JSON.parse(body));

        try {
            const instance = newInstance(Character, data);
            const created = create(instance);
            const serialized = serialize(created);

            res.status(HttpStatus.CREATED).send(serialized);
        } catch (err) {
            const error = creationError(err.message);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    });
});

module.exports = router;
