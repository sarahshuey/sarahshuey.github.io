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
          <p> The first thing I did was look into the API and figure out what area I would be working with and how to call it. Next I just got up a simple page and button to display the data I wanted to use. I then got the player to work so I could focus on gettin the songs to play. The last thing I did was style the page in a modern simple look.</p>
          </div>
          </div>
          </div>
          <div className="code">
          <a  className="live" style={{margin:"10px"}} target ="_blank" href="https://github.com/sarahshuey/music-player">View Code</a>
          </div>
          </div>
        );
      }
      }
export default ProjectOne
