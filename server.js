// Utwórz prostą aplikację serwerową w Node.js w zmiennej o nazwie **server.js**, która nasłuchuje na porcie 3000 i zwraca "Witaj, świecie!" na żądanie GET do głównego ścieżki (/).

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Witaj, świecie!');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
