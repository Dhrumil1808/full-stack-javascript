import config from './config';
import apiRouter from './api';
import './serverRender';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

console.log();
server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
