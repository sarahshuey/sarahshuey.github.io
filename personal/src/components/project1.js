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
          <h2> Music Player</h2>
          <h3>About</h3>
          <p>The Music Player is a project I did that allows you to access Apples API and search for any artist and listen to the first 30 seconds of the song.</p>
          <h3>Process</h3>
          <p></p>
          </div>
        );
      }
      }
export default Project
