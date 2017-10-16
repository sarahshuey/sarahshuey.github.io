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
          <h2> Company Directory </h2>
          <h3> About </h3>
          <p>The Company Directory was built to highlight CSS skills such as flexbox, hover effects, and responsive layouts.</p>
          <h3> Process </h3>
          <p></p>
          </div>
        );
      }
      }
export default Project
