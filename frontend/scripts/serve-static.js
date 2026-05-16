'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '127.0.0.1';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

function sendFile(response, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  response.writeHead(200, {
    'Content-Type': contentTypes[extension] || 'application/octet-stream',
  });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const requestedPath = path.normalize(path.join(buildDirectory, decodedPath));

  if (!requestedPath.startsWith(buildDirectory)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.stat(requestedPath, (statError, stats) => {
    if (!statError && stats.isFile()) {
      sendFile(response, requestedPath);
      return;
    }

    sendFile(response, path.join(buildDirectory, 'index.html'));
  });
});

server.listen(port, host, () => {
  console.log(`Serving build at http://${host}:${port}`);
});
