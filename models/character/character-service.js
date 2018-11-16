const Character = require('./character-model');
const repository = require('../base-repository').newInstance(Character, 'characters');

module.exports = {
    /**
     * @returns {Promise<Character[]>}
     */
    async findAll() {
        return await repository.findAll();
    },

    /**
     * @returns {Promise<Character>}
     */
    async findById(id) {
        return await repository.findById(id);
    },

    /**
     * @param {Character} instance
     * @returns {Promise<Character>}
     */
    async create(instance) {
        if (instance.id) throw new Error('A new character should not have ID');
        return await repository.persist(instance);
    },

    /**
     * @returns {Promise<Character>}
     */
    async update(instance) {
        if (!instance.id) throw new Error('An ID is needed to update a character');
        return await repository.persist(instance);
    },

    /**
     * @param {string} id
     * @returns {Promise<void>}
     */
    async remove(id) {
        if (!id) throw new Error('An ID is needed to delete a character');
        await repository.remove(id);
    }
};