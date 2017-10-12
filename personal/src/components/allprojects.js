import React, { Component } from 'react';


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
      </div>
      <div className ='pro2'>
      <h2>PROJECT NAME</h2>
      <p>place were preview of work will go</p>
      </div>
      <div className ='pro3'>
      <h2>PROJECT NAME</h2>
      <p>place were preview of work will go</p>
      </div>
        </div>
    );
  }
}

export default Projects;
