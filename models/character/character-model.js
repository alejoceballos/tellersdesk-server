class Character {

    constructor(values) {
        Object.assign(this, values);
    }

    static newInstance(values) {
        return new Character(values);
    }

}

module.exports = Character;
