Utwórz prostą aplikację serwerową w Node.js w pliku o nazwie **server.js**, która nasłuchuje na porcie 3000 i zwraca "Witaj, świecie!" na żądanie GET do głównego ścieżki (/).

Utwórz serwer HTTP w pliku o nazwie **server2.js**, który nasłuchuje na porcie 4000. Serwer powinien obsługiwać dwie ścieżki: / powinna zwracać "Strona główna", a /about powinna zwracać "O nas". W przypadku innej ścieżki strona powinna zwracać status 404.

Utwórz serwer HTTP, który nasłuchuje na porcie 5000 w pliku **server3.js**. Serwer powinien obsługiwać ścieżkę /data, zwracając dane w formacie JSON: { "message": "Witaj, to są dane!" }.

Utwórz serwer HTTP w zmiennej o nazwie **server4.js** w pliku o nazwie **server4.js** i obsługuje ścieżkę /submit. Serwer powinien akceptować żądania POST, w których otrzymuje JSONa, a następnie zwraca ten sam obiekt z dodatkowym kluczem received: true.
