import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
      textAlign:"center"
    }
    return (
      <div className="allprojects" style={textStyle}>
      <div className ='pro1'>
      <h2>PROJECT NAME</h2>
      <p>place were preview of work will go</p>
      <div className="link1">
      <Link activeClassName="selected" to="/project1" style={{paddingRight:"10px"}}>View Process</Link>
      <Link activeClassName="selected" to="/project1">View Live</Link>
      </div>
      </div>
      <div className ='pro2'>
      <h2>PROJECT NAME</h2>
      <p>place were preview of work will go</p>
      <div className="link1">
      <Link activeClassName="selected" to="/project2" style={{paddingRight:"10px"}}>View Process</Link>
      <Link activeClassName="selected" to="/project2">View Live</Link>
      </div>
      </div>
      <div className ='pro3'>
      <h2>PROJECT NAME</h2>
      <p>place were preview of work will go</p>
      <div className="link1">
      <Link activeClassName="selected" to="/project3" style={{paddingRight:"10px"}}>View Process</Link>
      <Link activeClassName="selected" to="/project3">View Live</Link>
      </div>
      </div>
        </div>
    );
  }
}

export default Projects;
