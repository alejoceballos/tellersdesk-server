const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const Character = require('./character-model');

const dbInfra = {
    async getInfra() {
        const mongoClient = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
        const connectedClient = await mongoClient.connect();
        const db = connectedClient.db('tellersdesk_db');

        return {
            client: mongoClient,
            collection: db.collection('characters')
        };
    }
};

module.exports = {
    /**
     * @returns {Promise<Character[]>}
     */
    async findAll() {
        const {client, collection} = await dbInfra.getInfra();
        const cursor = collection.find({});
        const docs = await cursor.toArray();
        const entities = docs.map(doc => new Character(doc));
        client.close();

        return entities;
    },

    /**
     *
     * @param {string} id
     * @returns {Promise<Character>}
     */
    async findById(id) {
        const {client, collection} = await dbInfra.getInfra();
        const doc = await collection.findOne({_id: ObjectID(id)});
        const entity = new Character(doc);
        client.close();

        return entity;
    },

    /**
     * @param {Character} instance
     * @returns {Promise<Character>}
     */
    async persist(instance) {
        if (!instance) throw new Error('No instance to persist');
        if (!(instance instanceof Character)) throw new Error('Wrong type of model to persist');

        const {client, collection} = await dbInfra.getInfra();

        if (instance.id) {
            await collection.updateOne(
                { _id: ObjectID(instance.id)},
                { $set: instance }
            );
        } else {
            await collection.insertOne(instance);
        }

        client.close();

        return instance;
    },

    /**
     * @param {string} id
     */
    async remove(id) {
        if (!id) throw new Error('No instance identifier! Nothing to delete');

        const {client, collection} = await dbInfra.getInfra();
        await collection.deleteOne({_id: ObjectID(id)});
        client.close();
    }
};