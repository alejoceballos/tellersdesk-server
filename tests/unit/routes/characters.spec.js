const describe = require('mocha').describe,
    request = require('supertest'),
    assert = require('assert'),
    { app, character } = require('../requires');


describe('ROUTE: /api/characters', () => {
    describe('GET', () => {
        it('should get them all', done => {
            request(app)
                .get('/api/characters')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect(async response => {
                    const deserialized = await character.deserializer.deserialize(response.body);
                    assert.equal(2, deserialized.length);
                })
                .end(done);
        });
    });

    describe('POST', () => {
        it('should save a new one successfully', done => {
            const toCreate = character.newInstance({name: 'name', strength: 1, dexterity: 2, stamina: 3}),
            serialized = character.serializer.serialize(toCreate);

            request(app)
                .post('/api/characters')
                .send(serialized)
                .set('Accept', 'application/json')
                .expect(200)
                .end(async (err, response) => {
                    const deserialized = await character.deserializer.deserialize(response.body);
                    assert.ok(deserialized.id);
                    done();
                });
        });

        it('should not save one with existent id', done => {
            const toCreate = character.newInstance({id: 'whatever'}),
                serialized = character.serializer.serialize(toCreate);

            request(app)
                .post('/api/characters')
                .send(serialized)
                .set('Accept', 'application/json')
                .expect(500)
                .then(response => {
                    assert.deepEqual(
                        response.body.errors,
                        [{
                            code: 'XXX',
                            title: 'Could not add character',
                            detail: 'A new character should not have ID'
                        }]
                    );
                    done();
                });
        });
    });
});
