const http = require('http');
const snoowrap = require('snoowrap');

const hostname = '127.0.0.1';
const port = 8080;

// refresh token 59264954-4ZEIHuZY9N6p-70okhuxJqSyads
// access token 59264954-CZyZaWyVleX0oOZSlNUa59RpQnM

const r = new snoowrap({
    userAgent: 'my agent Gora',
    clientId: "YeMQjOy7Vc-TTw",
    clientSecret: 'SkO9R2trQzwQp2mOs-VXo7K0BpE',
    refreshToken: '59264954-4ZEIHuZY9N6p-70okhuxJqSyads'
  });


console.log('checkpoint');

//r.getSubmission('4j8p6d').expandReplies({limit: 5, depth: 5}).then(console.log)

//r.getSubreddit('funny').getHot().then(console.log)
var x = 1;
r.getSubreddit('funny').getRandomSubmission().then((out) => {
  //console.log(out);
  x = out;
})
.then(
  ready => {
    console.log(x);
    console.log(x['body']);
    console.log(x['gilded']);
    console.log(x['created_utc']);
    console.log(x.author);
    
  } 
)



//r.getHot().map(post => post.title).then(console.log);

// r.getHot().map(post => post.title)
// .then((output) => {
//   console.log(output);
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

















// PROXY CODE
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


/*
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
*/