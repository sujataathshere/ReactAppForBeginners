import React, { Component } from 'react'
import App from './../App';
import bellB from './../Images/BellB.png';
import bellA from './../Images/BellA.png';
class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Channel",
         sub: "Subscribe",
         imageURL: bellB
      };
    }
    styles = {
        fontStyle: "italic",
        color: "orange"
      };
      buttonChange = () => {
        this.setState({
          message: "Hit the bell icon to never miss an updates",
          sub: "Subscribed",
        });
      }
      imageChange = () => {
        this.setState({
          message: "Thank you! Happy Learing!",
          imageURL: bellA
        });
      }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <p>
          <img 
            style={{ width: "40px", height: "40px" }}
            src={this.state.imageURL}
            onClick={this.imageChange} 
            alt="" 
          />
        </p>
      </div>
    );
  }
}

export default NewComp;