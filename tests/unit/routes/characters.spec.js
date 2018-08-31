const request = require('supertest'),
    assert = require('assert'),
    app = require('../../../app'),

    JSONAPISerializer = require('jsonapi-serializer'),

    jsonApiType = 'characters',
    jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] },

    serializer = new JSONAPISerializer.Serializer(jsonApiType, jsonApiOptions),
    deserializer = new JSONAPISerializer.Deserializer(jsonApiType, jsonApiOptions);


describe('/api/characters', () => {
    it('GET All', done => {
        request(app)
            .get('/api/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                const deserialized = deserializer.deserialize(response.body);
                deserialized.then((list) => {
                    assert.equal(2, list.length);
                });
            })
            .end(done);
    });

    it('POST All', done => {
        const toCreate = new Character().setName('Test Character').setPhysicalAttributes(1, 2, 3);

        request(app)
            .post('/api/characters')
            .send(serializer.serialize(toCreate))
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                const deserialized = deserializer.deserialize(response.body);
                deserialized.then((created) => {
                    assert.equal(toCreate, created);
                });
            })
            .end(done);
    });
});
