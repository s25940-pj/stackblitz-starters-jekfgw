// Utwórz serwer HTTP w zmiennej o nazwie **server2.js**, który nasłuchuje na porcie 4000. Serwer powinien obsługiwać dwie ścieżki: / powinna zwracać "Strona główna", a /about powinna zwracać "O nas". W przypadku innej ścieżki strona powinna zwracać status 404.

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server2 = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Strona główna');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('O nas!');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server2.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server2;
