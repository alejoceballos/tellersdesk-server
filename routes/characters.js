const express = require('express'),
    router = express.Router(),
    service = require('../models/character/character-service'),
    Character = require('../models/character/character-model'),
    { serializer, deserializer } = require('../models/character/character-serializer'),
    JSONAPIError = require('jsonapi-serializer').Error;

const deserialize = data => deserializer.deserialize(data),
    newInstance = (type, data) => type.newInstance(data),
    create = instance => service.create(instance),
    serialize = data => serializer.serialize(data);


/* GET characters listing */
router.get('/', function (req, res /*, next*/) {
    res.send(serialize(service.findAll()));
});

/* POST new character */
router.post('/', async function (req, res) {
    const data = await deserialize(req.body);

    try {
        res.send(serialize(create(newInstance(Character, data))));
    } catch (error) {
        const errors = new JSONAPIError({
            code: 'XXX',
            title: 'Could not add character',
            detail: error.message
        });

        res.status(500).send(errors);
    }
});

module.exports = router;
