const http = require('http');
const server = require('../server2'); // Załóżmy, że serwer jest w pliku `server.js`

describe('HTTP Server Test', () => {
  beforeAll(() => {
    // Serwer jest już uruchomiony w pliku server.js
  });

  afterAll(() => {
    server.close();
  });

  test('GET / should return 200 and "Strona główna"', (done) => {
    http.get('http://localhost:4000', (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Strona główna');
        done();
      });
    });
  });

  test('GET /about should return 200 and "O nas"', (done) => {
    http.get('http://localhost:4000/about', (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('O nas');
        done();
      });
    });
  });

  test('GET /unknown should return 404', (done) => {
    http.get('http://localhost:4000/unknown', (res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
