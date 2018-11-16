const MongoClient = require('mongodb').MongoClient;

/**
 * @param {String} collectionName
 * @returns {Function}
 * @public
 */
const infra = function(collectionName) {
    return async function () {
        const mongoClient = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});
        const connectedClient = await mongoClient.connect();
        const db = connectedClient.db('tellersdesk_db');

        return {
            client: mongoClient,
            collection: db.collection(collectionName)
        };
    };
};

module.exports = infra;
