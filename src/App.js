import React, { Component } from 'react';
import {voteAngular,voteReact,voteVuejs} from './actions';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.store=this.props.state;
  }

  handleVoteAngular=()=>{
    this.store.dispatch(voteAngular());
  }
  handleVoteReact=()=>{
    this.store.dispatch(voteReact());
  }

  handleVoteVue=()=>{
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign':'center'}}>
          
          <h2>What is your facorite front-end framework in 2k17?</h2>
          <h4>click the logos Below to vote!</h4>
          <br />

          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>

            <div className="col-xs-offset-3 col-xs-2">
              <img src="react.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>

            <div className="col-xs-offset-3 col-xs-2">
              <img src="Vue.png" height="96" alt="Vue" onClick={this.handleVoteVue}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
