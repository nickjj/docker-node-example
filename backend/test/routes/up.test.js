const request = require('supertest');
const app = require('../../src/index');

describe('Test the up routes', () => {
  test('Index should return a status code 200', (done) => {
    request(app)
      .get('/up/')
      .expect(200, done);
  });

  test('Databases should return a status code 200', (done) => {
    request(app)
      .get('/up/databases')
      .expect(200, done);
  });
});
