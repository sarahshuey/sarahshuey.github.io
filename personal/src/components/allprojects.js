import React, { Component } from 'react';


class Projects extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#4171c9",
    }
    let textStyle={
      color:"black",
      lineHeight:"50px",
      paddingRight:"20px"
    }
    return (
      <div className="App">
        <header className="header" style={{color:"#4171c9"}}>
          <h1 className="title">About Us</h1>
        </header>
        <div className="page" style={aboutStyle}>
        <div className="SarahPic">
        </div>
        <div className="AboutSarah" style={{color:"#4171c9"}}>
        <h2> Austin Deen </h2>
        <p style={textStyle}> SARAH SHUEY
        </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
