class Character {

    static builder(id) {
        return new CharacterBuilder(new Character(), id);
    }
}

class CharacterBuilder {
    constructor(instance, id) {
        this.instance = instance;
        this.instance.id = id;
    }

    withName(name) {
        this.instance.name = name;

        return this;
    }

    withPhysicalAttributes(strength, dexterity, stamina) {
        this.instance.strength = strength;
        this.instance.dexterity = dexterity;
        this.instance.stamina = stamina;

        return this;
    }

    build() {
        return this.instance;
    }
}

module.exports = {
    Character: Character
};
