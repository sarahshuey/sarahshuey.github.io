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
          <h3> What I Did: </h3>
          <p>I built this page so that I could work on my responsive skills, I wanted to hilight my ability to make a page that was useable on a phone, tablet, or desktop.</p>
          <div className='processProject'>
          <h3> How I Did It: </h3>
          <p> I first imported the images from a database, next I mapped out how the page should look on a phone, tablet, or desktop. After that I started building from the phone up, making sure it look visually appealing at every stage. After I was done with responsiveness I wanted to work on my CSS skills and played around with hover effects and other tools I had not used before. </p>
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
export default ProjectThree
