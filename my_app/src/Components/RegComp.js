import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Reg component render");
    return (
      <div>I'm Reg Component {this.props.name}</div>
    );
  }
}

export default RegComp;