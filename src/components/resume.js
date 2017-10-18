import React, { Component } from 'react';
import resume from '../images/Sarah_Shuey.png'
import pdf from '../documents/Sarah_Shuey_Blue.pdf'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {

    return (
      <div className="bodyResume">
      <div className="resumePic">
        <img src={resume} alt="Sarah Shuey Resume"></img>
      </div>
      <div className="link">
      <a href="https://drive.google.com/file/d/0B_RaLBBTNIFJTERscG5ZV2E2U1k/view?usp=sharing" target="_blank" style={{textDecoration:"none",color:"#4171c9"}}> Download Resume</a>
      </div>
      </div>
    );
  }
}

export default Resume;
