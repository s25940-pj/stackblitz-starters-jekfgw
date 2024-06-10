const http = require('http');

describe('HTTP Server Test', () => {
  let server;
  beforeAll(() => {
    server = require('../server'); // Ścieżka do pliku serwera
  });

  afterAll(() => {
    server.close();
  });

  test('GET / should return 200 and "Witaj, świecie!"', (done) => {
    http.get('http://localhost:3000', (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Witaj, świecie!');
        done();
      });
    });
  });
});
