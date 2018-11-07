const ObjectIdentified = require('../object-identified-model');

class Character extends ObjectIdentified {

    constructor(values) {
        super();
        Object.assign(this, values);
    }

    static newInstance(values) {
        return new Character(values);
    }

}

module.exports = Character;
