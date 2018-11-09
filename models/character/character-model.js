const ObjectIdentified = require('../object-identified-model');

class Character extends ObjectIdentified {

    static newInstance(values) {
        return new Character(values);
    }

}

module.exports = Character;
