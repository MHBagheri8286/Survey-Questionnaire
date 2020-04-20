const http = require('http');
const fs = require('fs');
const path = require('path');
let body = '';

const server = http.createServer((request, response) => {

  let filePath = '../client-side' + request.url;
  if (filePath == '../client-side/') {
    filePath = '../client-side/SurveyQuestionnaire.html';
  }
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  };
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('./404.html', function (content) {
          response.writeHead(404);
          response.end('Not Found');
        });
      }
      else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    }
    else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');