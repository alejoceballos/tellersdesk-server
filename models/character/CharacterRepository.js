const uuid = require('uuid/v4'),
    Character = require('./CharacterModel'),
    data = [
        Character.newInstance({id: uuid(), name: 'Dominic Doonshield', strength: 3, dexterity: 3, stamina: 4}),
        Character.newInstance({id: uuid(), name: 'Lys Aming Nielle', strength: 2, dexterity: 5, stamina: 3})
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
            const idx = data.findIndex(element => element.id === character.id);
            if (idx < 0) throw new Error('Cannot update. Provided id not found');

            data[idx] = toPersist = Object.assign(Character.newInstance(), character);
        } else {
            data.push(toPersist = Object.assign(Character.newInstance({ id: uuid() }), character));
        }

        return toPersist;
    }
};