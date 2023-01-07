import React, { Component } from 'react';

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h4>Hello {this.props.name}! from {this.props.place} Welcome to the World.</h4>
        <p>{this.props.children}</p>  
      </div>
    );
  }
}

export default ClassProps;