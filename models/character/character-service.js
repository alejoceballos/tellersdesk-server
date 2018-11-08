const repository = require('./character-repository');

module.exports = {
    /**
     * @returns {Promise<Character[]>}
     */
    async findAll() {
        return await repository.findAll();
    },

    async findById(id) {
        return await repository.findById(id);
    },

    /**
     * @param {Character}instance
     * @returns {Promise<Character>}
     */
    async create(instance) {
        if (instance.id) throw new Error('A new character should not have ID');
        const persisted = await repository.persist(instance);
        return persisted;
    },

    async update(instance) {
        if (!instance.id) throw new Error('An ID is needed to update a character');
        return await repository.persist(instance);
    },

    remove(id) {
        if (!id) throw new Error('An ID is needed to delete a character');
        repository.remove(id);
    }
};