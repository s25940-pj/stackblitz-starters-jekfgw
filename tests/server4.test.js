const http = require('http');
const server = require('../server4'); // Załóżmy, że serwer jest w pliku `server.js`

describe('HTTP Server POST Request Test', () => {
  beforeAll(() => {
    // Serwer jest już uruchomiony w pliku server.js
  });

  afterAll(() => {
    server.close();
  });

  test('POST /submit should echo data with received true', (done) => {
    const data = JSON.stringify({
      name: 'Test',
    });

    const options = {
      hostname: 'localhost',
      port: 6000,
      path: '/submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);

      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });

      res.on('end', () => {
        const parsedData = JSON.parse(rawData);
        expect(parsedData).toEqual({
          name: 'Test',
          received: true,
        });
        done(); // Zakończ test
      });
    });

    req.on('error', (e) => {
      console.error(`Problem z żądaniem: ${e.message}`);
      done(e); // Zakończ test z błędem
    });

    // Wysyłanie danych
    req.write(data);
    req.end();
  });
});
