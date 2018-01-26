const {
  PORT
} = process.env;

const server = require('express')();

server.use((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('"hello world"');
});

server.listen(PORT || 3000);
