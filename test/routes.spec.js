import request from 'supertest';
import spa from '../src/routes/appshell.js';

describe('GET /', () => {
  it('should return hello world', (done) => {
    request(spa)
      .get('/')
      .expect('hello world', done);
  });
});
