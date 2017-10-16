import React, { Component } from 'react';
import resume from '../images/Sarah_Shuey.png'
import pdf from '../documents/Sarah_Shuey_Blue.pdf'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    let style={
      display:"flex",
      justifyContent:"center",
      color:"#4171c9",
      alignItems:"center",
      backgroundColor:"#dae2ef",
    }
    let link={
      padding:"10px",
      fontSize:"15px",
      borderColor:"#4171c9",
      borderSize:"2px",
      borderStyle:"solid",
      backgroundColor:"#dae2ef",
      alignContent:"end"
    }
    let imgStyle={
      borderColor:"#dae2ef",
      borderStyle:"solid",
      borderSize:"5px",
      backgroundColor:"#dae2ef",
      height:"1000px",
      display:"flex",
      justifyContent:"center",
      padding:"20px"
    }
    return (
      <div className="body" style={style}>
      <div className="link" style={link}>
      <Link activeClassName="selected" to={pdf} target="_blank" style={{textDecoration:"none",color:"#4171c9"}}> Download Resume</Link>
      </div>
      <div>
        <img src={resume} alt="Sarah Shuey Resume" style={imgStyle}></img>
      </div>
      </div>
    );
  }
}

export default Resume;
