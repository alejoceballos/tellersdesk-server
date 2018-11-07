const MongoClient = require('mongodb').MongoClient;
// const uuid = require('uuid/v4');

const Character = require('./character-model');

const data = [
    // Character.newInstance({id: uuid(), name: 'Dominic Doonshield', strength: 3, dexterity: 3, stamina: 4}),
    // Character.newInstance({id: uuid(), name: 'Lys Aming Nielle', strength: 2, dexterity: 5, stamina: 3})
];

const dbInfra = {
    async getInfra() {
        const mongoClient = new MongoClient('mongodb://localhost:27017');
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
     * @param id
     * @returns {Character}
     */
    findById(id) {
        const filtered = data.filter((character) => character.id === id);
        return filtered.pop();
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
            // const idx = data.findIndex(element => element.id === character.id);
            // if (idx < 0) throw new Error('Cannot update. No instance with provided id found');
            //
            // data[idx] = toPersist = Object.assign(Character.newInstance(), character);
        } else {
            await collection.insertOne(character);
            // data.push(toPersist = Object.assign(Character.newInstance({ id: uuid() }), character));
        }

        client.close();

        return character;
    },

    /**
     *
     * @param character
     */
    remove(id) {
        if (!id) throw new Error('No instance\'s to delete');

        const idx = data.findIndex(element => element.id === id);
        if (idx < 0) throw new Error('Cannot delete. No instance with provided id found');

        delete data[idx];
    }
};