const request = require('supertest'),
    assert = require('assert'),
    {
        app,
        Character,
        CharacterSerializer,
        CharacterDeserializer
    } = require('../requires');


describe('ROUTE: /api/characters', () => {
    it('GET All', done => {
        request(app)
            .get('/api/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(async response => {
                const deserialized = await CharacterDeserializer.deserialize(response.body);
                assert.equal(2, deserialized.length);
            })
            .end(done);
    });

    it('POST', done => {
        const toCreate = Character.newInstance({name: 'name', strength: 1, dexterity: 2, stamina: 3}),
        serialized = CharacterSerializer.serialize(toCreate);

        request(app)
            .post('/api/characters')
            .send(serialized)
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200)
            .end(async (err, response) => {
                const deserialized = await CharacterDeserializer.deserialize(response.body);
                assert.ok(deserialized.id);
                done();
            });
    });
});
