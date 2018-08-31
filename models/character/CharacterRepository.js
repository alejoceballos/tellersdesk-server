const uuid = require('uuid/v4'),
    Character = require('./CharacterModel').Character,
    data = [
        new Character(uuid()).setName('Dominic Doonshield').setPhysicalAttributes(3, 3, 4),
        new Character(uuid()).setName('Lys Aming Nielle').setPhysicalAttributes(2, 5, 3)
    ];

module.exports = {
    findAll: function () {
        return data;
    },

    persist: function (character) {
        if (!character) throw new Error('Cannot persist undefined');
        if (!(character instanceof Character)) throw new Error('Cannot persist wrong type of model');

        let toPersist;

        if (character.id) {
            toPersist = data.find(element => element.id === character.id);
            if (!toPersist) throw new Error('Cannot update. Provided id not found');
        } else {
            toPersist = new Character(uuid());
        }

        return toPersist
            .setName(character.name)
            .setPhysicalAttributes(
                character.strength,
                character.dexterity,
                character.stamina
            );
    }
};