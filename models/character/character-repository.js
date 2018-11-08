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
        const characters = docs.map(doc => new Character(doc));
        client.close();

        return characters;
    },

    /**
     *
     * @param {string} id
     * @returns {Promise<Character>}
     */
    async findById(id) {
        const {client, collection} = await dbInfra.getInfra();
        const doc = await collection.findOne({_id: ObjectID(id)});
        const character = new Character(doc);
        client.close();

        return character;
    },

    /**
     * @param {Character} character
     * @returns {Promise<Character>}
     */
    async persist(character) {
        if (!character) throw new Error('No instance to persist');
        if (!(character instanceof Character)) throw new Error('Wrong type of model to persist');

        const {client, collection} = await dbInfra.getInfra();

        if (character.id) {
            await collection.updateOne(
                { _id: ObjectID(character.id)},
                { $set: character }
            );
        } else {
            await collection.insertOne(character);
        }

        client.close();

        return character;
    },

    /**
     * @param {string} id
     */
    async remove(id) {
        if (!id) throw new Error('No instance\'s to delete');

        const {client, collection} = await dbInfra.getInfra();
        await collection.deleteOne({_id: ObjectID(id)});
        client.close();
    }
};