import  https from 'https';
import http from 'http';

https.get("https://www.lynda.com",res =>
{
	console.log('reponse code' , res.statusCode);

	res.on('data', chunk => {
		console.log(chunk.toString());
	});
});


const server = http.createServer();
server.listen(8080);

server.on('request',(req,res) =>{
	res.write("Hello Http\n");
	setTimeout(() => {
		res.write("I can stream\n");
		res.end();
	},10000);

});