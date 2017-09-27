import React from 'react';
import Header from './Header';

import ContestPreview from './ContestPreview';
//import data from '../testData';
import axios from 'axios';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests:this.props.initialContests
  };
  componentDidMount() {
    // timers, listeners

    axios.get('/api/contests').then(
      resp=>{
        this.setState({
          contests: resp.data.contests
        });

      })
    .catch(console.error);
   // this.setState({
     // contests:data.contests
   // });

  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
        {this.state.contests.map(function(contest) {return <ContestPreview key={contest.id} contest={contest}  /> }) }
        </div>
      </div>
    );
  }
}

export default App;
