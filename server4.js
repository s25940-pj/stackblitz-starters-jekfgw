// Utwórz serwer HTTP w zmiennej o nazwie server4.js, który nasłuchuje na porcie 6000 i obsługuje ścieżkę /submit. Serwer powinien akceptować żądania POST, w których otrzymuje JSONa, a następnie zwraca ten sam obiekt z dodatkowym kluczem received: true.

const http = require('http');

const hostname = '127.0.0.1';
const port = 6000;

const server4 = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const data = JSON.parse(body);
      data.received = true;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server4.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server4;
