
import React, { Component } from 'react';


    class Project extends Component {
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
          <div className="project1">
          <h2> Project 2</h2>
          <h3> About </h3>
        <p>This page was a mock up that I made in order to show my abilities to build a responsive web page.</p>
        <h3> Process </h3>
        <p></p>
          </div>
        );
      }
      }
export default Project
