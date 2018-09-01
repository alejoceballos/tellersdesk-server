const JSONAPISerializer = require('jsonapi-serializer'),

    jsonApiType = 'characters',
    jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] };

module.exports = {
    serializer: new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
    deserializer: new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions)
};

