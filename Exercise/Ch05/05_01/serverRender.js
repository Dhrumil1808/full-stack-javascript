
import config from './config';
import axios from 'axios';


axios.get('http://'+ config.host + ':' + config.port + '/api/contests').
then(resp =>{
	console.log(resp.data);
}).catch(error => {
	console.log(error);
});