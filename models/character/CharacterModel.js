class Character {

    constructor(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setPhysicalAttributes(strength, dexterity, stamina) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.stamina = stamina;
        return this;
    }
}

module.exports = {
    Character: Character
};
