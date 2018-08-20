const express = require('express'),
    router = express.Router(),
    JSONAPISerializer = require('jsonapi-serializer').Serializer,

    jsonApiType = 'characters',
    jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] },
    jsonApiSerializer = new JSONAPISerializer(jsonApiType, jsonApiOptions);


/* GET characters listing. */
router.get('/', function (req, res /*, next*/) {
    const rawData = [
            {
                id: 1,
                name: 'Dominic Doonshield',
                strength: 3,
                dexterity: 3,
                stamina: 4
            },
            {
                id: 2,
                name: 'Lys Ming Nielle',
                strength: 2,
                dexterity: 5,
                stamina: 3
            }
        ],
        serializedData = jsonApiSerializer.serialize(rawData);

    res.send(serializedData);
});

module.exports = router;
