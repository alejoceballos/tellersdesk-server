const ObjectID = require('mongodb').ObjectID;

class ObjectIdentified {

    get id() {
        if (this._id) {
            return this._id.toHexString();
        }

        return this._id;
    }

    set id(id) {
        this._id = new ObjectID(id);
    }

    constructor(values) {
        Object.assign(this, values);
    }

}

module.exports = ObjectIdentified;
