const Character = require('./CharacterModel').Character;

module.exports = {
    findAll: function() {
        return [
            Character.builder(1).withName('Dominic Doonshield').withPhysicalAttributes(3, 3, 4).build(),
            Character.builder(2).withName('Lys Aming Nielle').withPhysicalAttributes(2, 5, 3).build()
        ];
    }
};