const ObjectIdentified = require('../object-identified-model');

class Story extends ObjectIdentified {
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
