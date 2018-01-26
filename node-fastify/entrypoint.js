const {
  PORT
} = process.env;

const server = require('fastify')();

server.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send('hello world');
});

server.listen(PORT || 3000, '0.0.0.0');
