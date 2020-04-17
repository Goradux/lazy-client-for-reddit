const http = require('http');
const snoowrap = require('snoowrap');

const hostname = '127.0.0.1';
const port = 3000;

const r = new snoowrap({
    userAgent: 'my agent Gora',
    clientId: "sdFYMdVeMGtguQ",
    clientSecret: 'filler',
    refreshToken: 'filler'
  });

r.getHot().map(post => post.title).then(console.log);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

