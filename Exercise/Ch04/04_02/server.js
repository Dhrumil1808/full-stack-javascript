import config from './config';
import apiRouter from './api';
import sassmiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');


server.use(sassmiddleware(
{
src: path.join(__dirname,'sass'),
dest: path.join(__dirname,'views')
}));
server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
