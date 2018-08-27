const request = require('supertest'),
    app = require('../../../app');

describe('/api/characters', () => {
    it('should get characters raw data', done => {
        request(app)
            .get('/api/characters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });
});
