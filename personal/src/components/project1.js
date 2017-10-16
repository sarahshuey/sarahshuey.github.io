import React, { Component } from 'react';
import preview from '../images/music.png'



    class ProjectOne extends Component {
      render() {

        return (
          <div>
          <div className="projectHead">
          <h2> Music Player </h2>
          </div>
          <div className="project">
          <img src={preview} alt="Sarah Shuey Resume"></img>
          <div className='aboutProject'>
          <h3> About </h3>
          <p>The Music Player is a project I did that allows you to access Apples API and search for any artist and listen to the first 30 seconds of the song.</p>
          <div className='processProject'>
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
