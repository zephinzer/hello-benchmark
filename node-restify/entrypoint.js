const {
  PORT
} = process.env;

const server = require('restify').createServer();

server.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('hello world');
});

server.listen(PORT || 3000);
