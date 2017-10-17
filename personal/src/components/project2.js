import React, { Component } from 'react';
import preview from '../images/bartoncreek.png'


    class ProjectTwo extends Component {
      render() {
        return (
          <div>
          <div className="projectHead">
          <h2> Barton Creek Cycling </h2>
          </div>
          <div className="project">
          <img src={preview} alt="project"></img>
          <div className="aboutProject">
          <h3> What I Did: </h3>
        <p>I worked on this in order to gain experience working on a collaborative project. The purpose of this page is to utilize github and brodern our scope of css tools. </p>
        <div className="processProject">
        <h3> How I Did It:  </h3>
        <p>First we figured out what the scope of the project was and then split the work between the three of us. Next I worked on the map location, styling, and responsivness. This project tested our abilities to work as a team and pushing to github without merge conflicts.</p>
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
export default ProjectTwo
