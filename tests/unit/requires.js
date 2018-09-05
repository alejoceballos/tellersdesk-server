module.exports = {
    app: require('../../app'),
    character: {
        newInstance: require('../../models/character/character-model').newInstance,
        serializer: require('../../models/character/character-serializer').serializer,
        deserializer: require('../../models/character/character-serializer').deserializer
    }
};