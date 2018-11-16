const repository = require('./story-repository');

module.exports = {
    /**
     * @returns {Promise<Story[]>}
     */
    async findAll() {
        return await repository.findAll();
    },

    /**
     * @returns {Promise<Story>}
     */
    async findById(id) {
        return await repository.findById(id);
    },

    /**
     * @param {Story} instance
     * @returns {Promise<Character>}
     */
    async create(instance) {
        if (instance.id) throw new Error('A new story should not have ID');
        return await repository.persist(instance);
    },

    /**
     * @returns {Promise<Story>}
     */
    async update(instance) {
        if (!instance.id) throw new Error('An ID is needed to update a story');
        return await repository.persist(instance);
    },

    /**
     * @param {string} id
     * @returns {Promise<void>}
     */
    async remove(id) {
        if (!id) throw new Error('An ID is needed to delete a story');
        await repository.remove(id);
    }
};