// https://github.com/SeyZ/jsonapi-serializer
const JSONAPISerializer = require('jsonapi-serializer');

module.exports = function(jsonApiType, jsonApiOptions) {
    return {
        serializer: new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
        deserializer: new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions)
    };
};

