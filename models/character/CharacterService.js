const repository = require('./CharacterRepository');

module.exports = {
    findAll: function() {
        return repository.findAll();
    },

    persist: function(instance) {
        return repository.persist(instance);
    }
};