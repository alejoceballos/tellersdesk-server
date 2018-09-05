const repository = require('./character-repository');

module.exports = {
    findAll: function() {
        return repository.findAll();
    },

    create: function(instance) {
        if (instance.id) throw new Error('A new character should not have ID');
        return repository.persist(instance);
    },

    update: function(instance) {
        if (!instance.id) throw new Error('An ID is needed to update a character');
        return repository.persist(instance);
    }
};