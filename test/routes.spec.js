import request from 'supertest';
import spa from '../src/routes/spa.js';

describe('GET /', () => {
  it('should return hello world', (done) => {
    request(spa)
      .get('/')
      .expect('hello world', done);
  });
});
