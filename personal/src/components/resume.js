import React, { Component } from 'react';
import resume from '../images/SarahShuey.png'


class Resume extends Component {
  render() {
    return (
      <div className="App">
        <img src={resume} alt="Sarah Shuey Resume" style={{height:"1000px",display:"flex",justifyContent:"center"}}></img>
      </div>
    );
  }
}

export default Resume;
