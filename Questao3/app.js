// Carregar Modulos:
const http = require('http');
const url  = require('url');
const path = require('path');
const fs   = require('fs');

const publicDir = path.join(__dirname, 'public');

// Content-Types:
const contentTypes = {
    '.html':    'text/html; charset=utf-8',
    '.js':      'text/javascript; charset=utf-8',
    '.json':    'application/json; charset=utf-8'
};

// Rotas:
const routes = {
    '/': 'index.html',
    '/instituicao': 'instituicao.html'
};

// Abrir Arquivos:
function readFile(response, file, statusCode = 200) {
    fs.readFile(file, function(err, data) {
        if (err) {
            console.log(`Erro ao ler arquivo ${file}:`, err.message);
            response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            return response.end('Página não encontrada (404)');
        }
        
        var extension = path.extname(file).toLowerCase();
        var contentType = contentTypes[extension] || 'application/octet-stream';

        response.writeHead(statusCode, {'Content-Type': contentType});
        response.end(data);
    });
}

// Funcao CallBack do server http:
var callback = function(request, response) {
    var pathname = decodeURIComponent(url.parse(request.url).pathname);

    // ROTAS:
    if (routes[pathname]) {
        return readFile(response, path.join(publicDir, routes[pathname]));
    }

    var file = path.join(publicDir, pathname);
    readFile(response, file);
}

// Servidor
var server = http.createServer(callback);
server.listen(3000, () => {
    console.log(`Servidor iniciado em http://localhost:3000/ ....`);
});
