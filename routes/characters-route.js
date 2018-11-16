const router = require('express').Router();
const params = {
    service: require('../models/character/character-service'),
    modelClass: require('../models/character/character-model'),
    jsonApi: {
        type:  'characters',
        options: {
            attributes: [
                'name',
                'strength', 'dexterity', 'stamina',
                'strength', 'dexterity', 'stamina',
                'charisma', 'manipulation', 'appearance',
                'perception', 'intelligence', 'wits'
            ]
        },
    },
    errors: {
        create: { id: '001', message: 'Could not add character' },
        update: { id: '002', message: 'Could not update character' },
        delete: { id: '003', message: 'Could not delete character' }
    }
};

const routeDefaults = require('./route-defaults')(router, params);

module.exports = routeDefaults;