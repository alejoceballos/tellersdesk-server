const Model = require('../base-model');

/**
 * @package models/story
 * @class Story
 */
class Story extends Model {
    /**
     * Factory method
     *
     * @param {Object} values
     * @returns {Story}
     */
    static newInstance(values) {
        return new Story(values);
    }
}

module.exports = Story;
