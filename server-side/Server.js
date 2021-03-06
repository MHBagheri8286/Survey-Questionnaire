const http = require('http');
const fs = require('fs');
const path = require('path');
var qs = require('querystring');


const server = http.createServer((request, response) => {

  const { url } = request;


  if (url === '/surveyQuestionnaire') {
    let formData = '';
    request.on('data', (data) => {
      formData += data;
    }).on('end', () => {
      response.on('error', (err) => {
        console.error(err);
      });
      response.writeHead(200, { 'Content-Type': 'text/html' });
      var post = qs.parse(formData);
      console.log(post);
      
      response.write("<h3>Data sent successfully!</h3>");
      response.end();
    });
  }


  let filePath = '..' + request.url;
  if (filePath == '../') {
    filePath = '../SurveyQuestionnaire.html';
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
