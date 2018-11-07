// https://github.com/SeyZ/jsonapi-serializer
const JSONAPISerializer = require('jsonapi-serializer');

const jsonApiType = 'characters';
const jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] };

module.exports = {
    serializer: new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
    deserializer: new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions)
};

