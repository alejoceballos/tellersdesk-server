// https://github.com/SeyZ/jsonapi-serializer
const JSONAPISerializer = require('jsonapi-serializer');

const jsonApiType = 'characters';
const jsonApiOptions = {
    attributes: [
        'name',
        'strength', 'dexterity', 'stamina',
        'strength', 'dexterity', 'stamina',
        'charisma', 'manipulation', 'appearance',
        'perception', 'intelligence', 'wits'
    ]
};

module.exports = {
    serializer: new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
    deserializer: new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions)
};

