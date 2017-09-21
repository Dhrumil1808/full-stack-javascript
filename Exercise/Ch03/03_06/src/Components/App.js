
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'


class App extends React.Component 
{

state={pageHeader : "Naming Contests"};

componentDidMount() { console.log('did mount');}

componentWillUnmount() { console.log(' will unmount')}

	render()
{
	return (<div> <Header message={this.state.pageHeader} /> </div>);
}	
}

export default App;