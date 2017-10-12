import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
<div className="App" style={{backgroundColor:"#f9f9f9"}}>
<div className='homeme' id='home'>
<div className='me'>
<img src="images/IMG_8737.JPG" alt="Sarah and a Dog"></img>
</div>
<div className='mememe'>
<div className = 'logo'>
  <img src="images/Shuey-logo-smoll.png" alt="sarah shuey logo"></img>
</div>
<div className = 'name-header'>
<p className='sarah'>SARAH SHUEY</p>
<p className='title'>Front End Developer</p>
</div>
<div className='aboutme'>
<p>Lover of dogs, tacos, and margaritas</p>
</div>
</div>
</div>
<div className='myinfo'>
<p className='myresume'>
<a target = "_blank" href="sarah_shuey.pdf">DOWNLOAD RESUME</a>
</p>
<p className ='email'>
  <a href="#socialmedia">CONTACT ME</a>
</p>
</div>
<div className='projectstitle'>
<h2>MY PROJECTS</h2>
</div>
<div className ='projectpreview'>
<div className ='pro1'>
  <a href="#"><img src="images/music.png" alt="Music Player"></img></a>
  <div className ='aboutproject'>
<h2>MUSIC PLAYER</h2>
<p>The Music Player is a project I did that allows you to access Apples API and search for any artist and listen to the first 30 seconds of the song.</p>
</div>
</div>
<div className ='pro2'>
  <a href="#"><img src="images/responsive.png" alt="Responsive Web Page"></img></a>
  <div className ='aboutproject'>
    <div className ='aboutproject2'>
  <h2>RESPONSIVE PAGE</h2>
    <p>This page was a mock up that I made in order to show my abilities to build a responsive web page.</p>
  </div>
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
      </div>
    );
  }
}

export default App;
