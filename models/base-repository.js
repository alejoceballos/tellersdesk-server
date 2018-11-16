const ObjectID = require('mongodb').ObjectID;

/**
 * @namespace models
 * @class Repository
 */
class Repository {
    /**
     * @param {Class<?>} modelClass
     * @param {String} collectionName
     * @constructor
     */
    constructor(modelClass, collectionName) {
        this.modelClass = modelClass;
        this.dbInfra = require('./db/infra')(collectionName);
    }

    /**
     * Factory method
     *
     * @param {Class<?>} modelClass
     * @param {String} collectionName
     * @returns {Repository}
     */
    static newInstance(modelClass, collectionName) {
        return new Repository(modelClass, collectionName);
    }

    /**
     * @returns {Promise<?[]>}
     */
    async findAll() {
        const {client, collection} = await this.dbInfra();
        const cursor = collection.find({});
        const docs = await cursor.toArray();
        const entities = docs.map(doc => new this.modelClass(doc));
        client.close();

        return entities;
    }

    /**
     *
     * @param {string} id
     * @returns {Promise<?>}
     */
    async findById(id) {
        const {client, collection} = await this.dbInfra();
        const doc = await collection.findOne({_id: ObjectID(id)});
        const entity = new this.modelClass(doc);
        client.close();

        return entity;
    }

    /**
     * @param {?} instance
     * @returns {Promise<?>}
     */
    async persist(instance) {
        if (!instance) throw new Error('No instance to persist');
        if (!(instance instanceof this.modelClass)) throw new Error('Wrong type of model to persist');

        const {client, collection} = await this.dbInfra();

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
    }

    /**
     * @param {string} id
     */
    async remove(id) {
        if (!id) throw new Error('No instance identifier! Nothing to delete');

        const {client, collection} = await this.dbInfra();
        await collection.deleteOne({_id: ObjectID(id)});
        client.close();
    }
}

module.exports = Repository;