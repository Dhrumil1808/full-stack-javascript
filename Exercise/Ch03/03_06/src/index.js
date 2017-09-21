import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App'
const color = Math.random() > 0.5 ? 'Green' : 'Red'





ReactDOM.render( <App  /> ,document.getElementById('root'));


setTimeout(() => 
{
	ReactDOM.render(<h2> ......</h2>, document.getElementById('root'));
},4000);