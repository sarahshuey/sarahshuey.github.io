import React, { Component } from 'react';
import preview from '../images/directory.png'


    class ProjectThree extends Component {
      render() {
        return (
          <div>
          <div className="projectHead">
          <h2> Company Directory </h2>
          </div>
          <div className="project">
          <img src={preview} alt="Company Directory"></img>
          <div className='aboutProject'>
          <h3> About </h3>
          <p>The Company Directory was built to highlight CSS skills such as flexbox, hover effects, and responsive layouts.</p>
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
export default ProjectThree
