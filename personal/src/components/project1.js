import React, { Component } from 'react';
import resume from '../images/music.png'
import preview from '../images/music.png'



    class ProjectOne extends Component {
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
          <h2> Music Player </h2>
          </div>
          <div className="project" style={textStyle}>
          <img src={preview} alt="Sarah Shuey Resume" style={{height:"400px",display:"flex",justifyContent:"center",padding:"20px"}}></img>
          <div className='about'style={aboutStyle}>
          <h3> About </h3>
          <p>The Music Player is a project I did that allows you to access Apples API and search for any artist and listen to the first 30 seconds of the song.</p>
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
export default ProjectOne
