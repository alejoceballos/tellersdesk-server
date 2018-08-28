const express = require('express'),
    router = express.Router(),
    service = require('../models/character/CharacterService'),
    JSONAPISerializer = require('jsonapi-serializer').Serializer,

    jsonApiType = 'characters',
    jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] },
    jsonApiSerializer = new JSONAPISerializer(jsonApiType, jsonApiOptions);


/* GET characters listing. */
router.get('/', function (req, res /*, next*/) {
    const rawData = service.findAll(),
        serializedData = jsonApiSerializer.serialize(rawData);

    res.send(serializedData);
});

module.exports = router;
