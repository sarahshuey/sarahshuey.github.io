import React, { Component } from 'react';
import resume from '../images/Sarah_Shuey.png'
import pdf from '../documents/Sarah_Shuey_Blue.pdf'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    let style={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      color:"#4171c9",
      alignItems:"center"
    }
    return (
      <div className="body" style={style}>
      <div style={{padding:"20px",fontSize:"30px",textDecoration:"none"}}>
      <Link activeClassName="selected" to={pdf} target="_blank" style={{textDecoration:"none",color:"#4171c9"}}> Download Resume</Link>
      </div>
      <div>
        <img src={resume} alt="Sarah Shuey Resume" style={{height:"1000px",display:"flex",justifyContent:"center",padding:"20px"}}></img>
      </div>
      </div>
    );
  }
}

export default Resume;
