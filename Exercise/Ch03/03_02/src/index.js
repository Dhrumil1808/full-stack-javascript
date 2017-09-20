import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'Green' : 'Red'

const App=(props) => 
{
	return (<h2 className="text-center" style={{color}} className="text-center"> {props.headermessage}  {props.introduction} </h2>);
};


App.propTypes = {
	headermessage : React.PropTypes.string
}

App.defaultProps  = {
	headermessage : "Hello there",
	introduction : "Hello, Hi how are?"
}
ReactDOM.render( <App  /> ,document.getElementById('root'));