let request = require('supertest');
let app = require('../src/server/routes/spa');

describe('GET /', () => {
  it('should return hello world', (done) => {
    request(app)
      .get('/')
      .expect('hello world', done);
  });
});
