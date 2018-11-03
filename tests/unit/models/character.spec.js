const describe = require('mocha').describe,
    assert = require('assert'),
    character = require('../requires').character;

describe('MODEL: Character', () => {
    describe('New Instance', () => {
        it('With default values', () => {
            const data = {id: 1, name: 'name', strength: 1, dexterity: 2, stamina: 3},
                instance = character.newInstance(data),
                dataStr = JSON.stringify(data),
                instanceStr = JSON.stringify(instance);

            assert.equal(dataStr, instanceStr);
        });

        it('Empty', () => {
            const instance = character.newInstance(),
                dataStr = JSON.stringify({}),
                instanceStr = JSON.stringify(instance);

            assert.equal(dataStr, instanceStr);
        });
    });
});