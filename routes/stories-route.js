const router = require('express').Router();
const params = {
    service: require('../models/story/story-service'),
    modelClass: require('../models/story/story-model'),
    jsonApi: {
        type:  'stories',
        options: { attributes: ['title', 'summary'] },
    },
    errors: {
        create: { id: '004', message: 'Could not add story' },
        update: { id: '005', message: 'Could not update story' },
        delete: { id: '006', message: 'Could not delete story' }
    }
};

const routeDefaults = require('./route-defaults')(router, params);

module.exports = routeDefaults;