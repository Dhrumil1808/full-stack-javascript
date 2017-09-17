import config from './config'
import express from 'express';
import fs from 'fs';
import apirouter from'./api';


 const server =express();
 /* server.get('/',(req,res)=>{
  		res.send('Hi Express is working');
  });*/

  server.set('view engine', 'ejs');


  server.get('/',(req,res)=>{
  		res.render('index',{
  			'content': ' <b> Hello World and EJS! </b>'
  		});
  });

  /*server.get('/about.html',(req,res)=>{
  		fs.readFile('./about.html',(err,data) => {
  			res.send(data.toString());
  		});
  });*/

  server.use('/api',apirouter);
 // server.use(express.static("public"));

  server.listen(config.port, () => {
  	console.info('Express listening on port', config.port);
  });




