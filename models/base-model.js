const ObjectID = require('mongodb').ObjectID;

/**
 * @package models
 * @class Model
 */
class Model {
    /**
     * @property id
     * @returns {String}
     * @getter
     */
    get id() {
        if (this._id) {
            return this._id.toHexString();
        }

        return this._id;
    }

    /**
     * @property id
     * @param id
     * @setter
     */
    set id(id) {
        this._id = new ObjectID(id);
    }

    /**
     * @constructor
     * @param {Object} values
     */
    constructor(values) {
        Object.assign(this, values);
    }
}

module.exports = Model;
