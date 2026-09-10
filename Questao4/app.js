// Carregar os Modulos:
const http = require('http');
const url  = require('url');
const path = require('path');
const fs   = require('fs');
 
const publicDir = path.join(__dirname, 'public');
 
// Content-Types:
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
};
 
// Rotas:
const routes = {
    '/': 'index.html',
    '/fatec':'fatec.html',
    '/fecap': 'fecap.html'
};
 
// Abrir Arquivos:
function readFile(response, file){
    fs.readFile(file, function(err, data){
        if(err){
            response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
            return fs.createReadStream(
                path.join(publicDir, 'erro404.html')
            ).pipe(response);
        }
 
        var extension = path.extname(file).toLowerCase();
        var contentType = contentTypes[extension] || 'application/octet-stream';
 
        response.writeHead(200, {'Content-Type':contentType});
        response.end(data);
    });
}
 
// Função callBack do server http:
var callback = function(request, response){
    var pathname = decodeURIComponent(url.parse(request.url).pathname);
 
    // ROTAS:
    if(routes[pathname])
        return readFile(response, path.join(publicDir, routes[pathname]));
 
    // Arquivos Estáticos:
    var file = path.join(publicDir, pathname);
 
    readFile(response, file);
}
 
// Servidor
var server = http.createServer(callback);
server.listen(3000);
console.log(`Servidor iniciado em http://localhost:3000/`)