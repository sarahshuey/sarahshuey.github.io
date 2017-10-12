import React, { Component } from 'react';


class Projects extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#4171c9",
    }
    let textStyle={
      color:"black",
      lineHeight:"50px",
      paddingRight:"20px"
    }
    return (
      <div className="allprojects">
      <div className='projectstitle'>
      <h2>MY PROJECTS</h2>
      </div>
      <div className ='pro1'>
        <a href="#"><img src="images/music.png" alt="Music Player"></img></a>
        <div className ='aboutproject'>
      <h2>MUSIC PLAYER</h2>
      <p>The Music Player is a project I did that allows you to access Apples API and search for any artist and listen to the first 30 seconds of the song.</p>
      </div>
      </div>
      <div className ='pro2'>
        <a href="#"><img src="images/responsive.png" alt="Responsive Web Page"></img></a>
          <div className ='aboutproject2'>
        <h2>RESPONSIVE PAGE</h2>
          <p>This page was a mock up that I made in order to show my abilities to build a responsive web page.</p>
        </div>
        </div>
      <div className ='pro3'>
        <a href="#"><img src="images/directory.png" alt="Directory Page"></img></a>
        <div className ='aboutproject'>
        <h2>COMPANY DIRECTORY</h2>
          <p>The Company Directory was built to highlight CSS skills such as flexbox, hover effects, and responsive layouts.</p>
        </div>
        </div>
        </div>
    );
  }
}

export default Projects;
