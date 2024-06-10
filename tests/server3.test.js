const http = require('http');
const server = require('../server3'); // Załóżmy, że serwer jest w pliku `server.js`

describe('HTTP Server JSON Response Test', () => {
  beforeAll(() => {
    // Serwer jest już uruchomiony w pliku server.js
  });

  afterAll(() => {
    server.close();
  });

  test('GET /data should return JSON with message', (done) => {
    http.get('http://localhost:5000/data', (res) => {
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );

      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });

      res.on('end', () => {
        const parsedData = JSON.parse(rawData);
        expect(parsedData).toEqual(
          expect.objectContaining({
            message: expect.stringMatching('Witaj, to są dane!'),
          })
        );
        done();
      });
    });
  });
});
