// https://github.com/SeyZ/jsonapi-serializer
const JSONAPISerializer = require('jsonapi-serializer');

const jsonApiType = 'stories';
const jsonApiOptions = {
    attributes: ['title', 'summary']
};

module.exports = {
    serializer: new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
    deserializer: new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions)
};

