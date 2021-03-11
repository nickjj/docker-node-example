const request = require('supertest');
const app = require('../../src/index');

describe('Test the pages routes', () => {
  test('Home page should return a status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  test('Health check should return a status code 200', (done) => {
    request(app)
      .get('/up')
      .expect(200, done);
  });
});
