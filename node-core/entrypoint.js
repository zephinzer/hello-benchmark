const {
  PORT
} = process.env;

require('http').createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end('"hello world"');
}).listen(PORT || 3000);
