const request = require('supertest');
const app = require('../../src/index');

describe('Test the pages routes', () => {
  test('Home page should return a status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
