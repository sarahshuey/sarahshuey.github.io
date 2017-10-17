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
          <h3> What I Did </h3>
          <p>This is a music player I build in order to search for your favorite artist or song and listen to the first 30 seconds.</p>
          <div className='processProject'>
          <h3> How I Did It </h3>
          <p> The first thing I did was look into Apples API and figure out what area I would be working with and how to call it. Next I just got up a simple page and button to display the data I wanted to use. I then got the player to work so I could focus on gettin the songs to play. The last thing I did was style the page in a modern simple look.</p>
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
