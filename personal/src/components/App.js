import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
<div className="App" style={{backgroundColor:"#f9f9f9"}}>
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
<div className='myinfo'>
<p className='myresume'>
<a target = "_blank" href="sarah_shuey.pdf">DOWNLOAD RESUME</a>
</p>
<p className ='email'>
  <a href="#socialmedia">CONTACT ME</a>
</p>
</div>
</div>

    );
  }
}

export default App;
