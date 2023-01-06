import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
      super(props);
      this.state = {name: "Sujata"};
    }
  componentDidMount(){
    setInterval( () => {this.setState({ name: "Sujata"});}, 3000);
  }
  render() {
    console.log("Parent component render");
    return (
      <div>
        I'm Parent Component
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    );
  }
}

export default ParentComp;