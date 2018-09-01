const express = require('express'),
    router = express.Router(),
    service = require('../models/character/CharacterService'),
    Character = require('../models/character/CharacterModel'),
    { serializer, deserializer } = require('../models/character/Serializer');

const deserialize = data => deserializer.deserialize(data),
    newInstance = (type, data) => type.newInstance(data),
    persist = instance => service.persist(instance),
    serialize = data => serializer.serialize(data);


/* GET characters listing */
router.get('/', function (req, res /*, next*/) {
    res.send(serialize(service.findAll()));
});

/* POST new character */
router.post('/', async function (req, res /*, next*/) {
    const data = await deserialize(req.body);
    res.send(serialize(persist(newInstance(Character, data))));
});

module.exports = router;
