const Model = require('../base-model');

/**
 * @package models/character
 * @class Character
 */
class Character extends Model {
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
