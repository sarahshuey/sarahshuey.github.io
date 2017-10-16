import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import preview1 from '../images/music.png'
import preview3 from '../images/directory.png'


class Projects extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#4171c9",
    }
    let textStyle={
      color:"#4171c9",
      lineHeight:"50px",
      textAlign:"center",
      backgroundColor:"#dae2ef",

    }
    let processStyle={
      color:"#4171c9",
      borderColor:"#4171c9",
      borderStyle:"solid",
      borderSize:"5px",
      textDecoration:"none",
      textAlign:"center",
      padding:"5px"
    }
    let liveStyle={
      color:"#4171c9",
      borderColor:"#4171c9",
      borderStyle:"solid",
      borderSize:"5px",
      textDecoration:"none",
      textAlign:"center",
      padding:"5px"
    }
    return (
      <div className="allprojects" style={textStyle}>
      <div className ='pro1'>
      <h2>Music Player</h2>
      <img src={preview1} alt="Sarah Shuey Resume" style={{width:"300px",padding:"10px"}}></img>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <div className="link1" style={{paddingRight:10}}>
      <Link activeClassName="selected" to="/project1" style={processStyle}>View Process</Link>
      </div>
      <div>
      <Link style={liveStyle}activeClassName="selected" to="/project1">View Live</Link>
      </div>
      </div>
      </div>
      <div className ='pro2'>
      <h2>Project Name</h2>
      <img src={preview1} alt="Sarah Shuey Resume" style={{width:"300px",padding:"10px"}}></img>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <div className="link1" style={{paddingRight:10}}>
      <Link activeClassName="selected" to="/project1" style={processStyle}>View Process</Link>
      </div>
      <div>
      <Link style={liveStyle}activeClassName="selected" to="/project1">View Live</Link>
      </div>
      </div>
      </div>
      <div className ='pro3'>
      <h2>Company Directory</h2>
      <img src={preview3} alt="Sarah Shuey Resume" style={{width:"300px",padding:"10px"}}></img>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <div className="link1" style={{paddingRight:10}}>
      <Link activeClassName="selected" to="/project3" style={processStyle}>View Process</Link>
      </div>
      <div>
      <Link style={liveStyle}activeClassName="selected" to="/project3">View Live</Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Projects;
