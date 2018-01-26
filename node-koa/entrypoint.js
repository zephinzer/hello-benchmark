const {
  PORT
} = process.env;

const Koa = require('koa');
const server = new Koa();

server.use((ctx) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = '"hello world"';
});

server.listen(PORT || 3000);
