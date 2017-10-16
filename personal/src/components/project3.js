import React, { Component } from 'react';
import preview from '../images/directory.png'


    class ProjectThree extends Component {
      render() {
        let aboutStyle={
          display:"flex",
          flexDirection:"column",
          color:"#4171c9",
        }
        let textStyle={
          color:"#4171c9",
          lineHeight:"50px",
          textAlign:"center",
          display:"flex",
          flexDirection:"row",
        }
        let headStyle={
          color:"#4171c9",
          textAlign:"center"
        }
        return (
          <div>
          <div className="projecthead" style={headStyle}>
          <h2> Company Directory </h2>
          </div>
          <div className="project" style={textStyle}>
          <img src={preview} alt="Sarah Shuey Resume" style={{height:"400px",display:"flex",justifyContent:"center",padding:"20px"}}></img>
          <div className='about'style={aboutStyle}>
          <h3> About </h3>
          <p>The Company Directory was built to highlight CSS skills such as flexbox, hover effects, and responsive layouts.</p>
          <div className='about'style={aboutStyle}>
          <h3> Process </h3>
          <p> how I went about building it</p>
          </div>
          </div>
          </div>
          </div>
        );
      }
      }
export default ProjectThree
