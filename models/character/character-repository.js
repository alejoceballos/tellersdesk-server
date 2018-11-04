const uuid = require('uuid/v4'),
    Character = require('./character-model'),
    data = [
        Character.newInstance({id: uuid(), name: 'Dominic Doonshield', strength: 3, dexterity: 3, stamina: 4}),
        Character.newInstance({id: uuid(), name: 'Lys Aming Nielle', strength: 2, dexterity: 5, stamina: 3})
    ];

module.exports = {
    /**
     *
     * @returns {Character[]}
     */
    findAll() {
        return data;
    },

    /**
     *
     * @param id
     * @returns {Character}
     */
    findById(id) {
        const filtered = data.filter((character) => character.id === id);
        return filtered.pop();
    },

    /**
     *
     * @param {Character} character
     * @returns {Character}
     */
    persist(character) {
        if (!character) throw new Error('No instance to persist');
        if (!(character instanceof Character)) throw new Error('Wrong type of model to persist');

        let toPersist;

        if (character.id) {
            const idx = data.findIndex(element => element.id === character.id);
            if (idx < 0) throw new Error('Cannot update. No instance with provided id found');

            data[idx] = toPersist = Object.assign(Character.newInstance(), character);
        } else {
            data.push(toPersist = Object.assign(Character.newInstance({ id: uuid() }), character));
        }

        return toPersist;
    },

    /**
     *
     * @param character
     */
    remove(id) {
        if (!id) throw new Error('No instance\'s to delete');

        const idx = data.findIndex(element => element.id === id);
        if (idx < 0) throw new Error('Cannot delete. No instance with provided id found');

        delete data[idx];
    }
};