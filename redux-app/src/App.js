import './App.css';
import React, {Component} from "react";
import NewComp from './NewComp';
import { render } from '@testing-library/react';
class App extends Component{
  styles = {
    fontStyle: 'bold',
    color: 'teal'
  }
  render(){
    return(
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp/>
      </div>
    )
  }
}
export default App;
