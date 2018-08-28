const request = require('supertest'),
    app = require('../../../app'),

    JSONAPISerializer = require('jsonapi-serializer').Deserializer,

    jsonApiType = 'characters',
    jsonApiOptions = { attributes: ['name', 'strength', 'dexterity', 'stamina'] },
    jsonApiDeserializer = new JSONAPISerializer(jsonApiType, jsonApiOptions);


describe('/api/characters', () => {
    it('should get characters raw data', done => {
        request(app)
            .get('/api/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                const deserialized = jsonApiDeserializer.deserialize(response.body);
                deserialized.then((what) => {
                    console.log(what);
                });
            })
            .end(done);
    });
});
