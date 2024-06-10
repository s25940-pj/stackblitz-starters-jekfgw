// Utwórz serwer HTTP w zmiennej **server3.js**, który nasłuchuje na porcie 5000. Serwer powinien obsługiwać ścieżkę /data, zwracając dane w formacie JSON: { "message": "Witaj, to są dane!" }.

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server3 = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/data') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Witaj, to są dane!' }));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server3.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server3;
