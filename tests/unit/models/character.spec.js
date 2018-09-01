const assert = require('assert'),
    Character = require('../requires').Character;

describe('MODEL: Character / New Instance', () => {
    it('With default values', () => {
        const data = {id: 1, name: 'name', strength: 1, dexterity: 2, stamina: 3},
            instance = Character.newInstance(data),
            dataStr = JSON.stringify(data),
            instanceStr = JSON.stringify(instance);

        assert.equal(dataStr, instanceStr);
    });

    it('Empty', () => {
        const instance = Character.newInstance(),
            dataStr = JSON.stringify({}),
            instanceStr = JSON.stringify(instance);

        assert.equal(dataStr, instanceStr);
    });
});