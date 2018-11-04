const repository = require('./character-repository');

module.exports = {
    findAll() {
        return repository.findAll();
    },

    findById(id) {
        return repository.findById(id);
    },

    create(instance) {
        if (instance.id) throw new Error('A new character should not have ID');
        return repository.persist(instance);
    },

    update(instance) {
        if (!instance.id) throw new Error('An ID is needed to update a character');
        return repository.persist(instance);
    },

    remove(id) {
        if (!id) throw new Error('An ID is needed to delete a character');
        repository.remove(id);
    }
};