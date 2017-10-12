import React, { Component } from 'react';
import resume from '../images/SarahShuey.png'
import pdf from '../documents/sarah_shuey.pdf'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return (
      <div className="App">
      <Link activeClassName="selected" to={pdf} target="_blank"> Download Resume</Link>
        <img src={resume} alt="Sarah Shuey Resume" style={{height:"1000px",display:"flex",justifyContent:"center",padding:"20px"}}></img>
      </div>
    );
  }
}

export default Resume;
