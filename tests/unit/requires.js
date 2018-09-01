module.exports = {
    app:       require('../../app'),
    Character: require('../../models/character/CharacterModel'),
    CharacterSerializer: require('../../models/character/Serializer').serializer,
    CharacterDeserializer: require('../../models/character/Serializer').deserializer
};