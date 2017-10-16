import React, { Component } from 'react';
import preview from '../images/directory.png'


    class ProjectTwo extends Component {
      render() {
        return (
          <div>
          <div className="projectHead">
          <h2> Project 2</h2>
          </div>
          <div className="project">
          <img src={preview} alt="project"></img>
          <div className="aboutProject">
          <h3> About </h3>
        <p>This page was a mock up that I made in order to show my abilities to build a responsive web page.</p>
        <div className="processProject">
        <h3> Process </h3>
        <p>how I went about building it</p>
          </div>
          </div>
          </div>
          </div>
        );
      }
      }
export default ProjectTwo
