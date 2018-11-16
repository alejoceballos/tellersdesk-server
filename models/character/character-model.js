const ObjectIdentified = require('../object-identified-model');

class Character extends ObjectIdentified {
    /**
     * Factory method
     *
     * @param {Object} values
     * @returns {Character}
     */
    static newInstance(values) {
        return new Character(values);
    }
}

module.exports = Character;
