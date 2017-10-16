import React, { Component } from 'react';
import '../styles/App.css';
import sarah from '../images/IMG_8737.JPG'


class App extends Component {
  render() {

    return (
<div className="App">
<div className='me'>
<img className='imgsarah'src={sarah} alt="Sarah and a Dog"></img>
<div className='meme'>
<div className = 'name-header'>
<p className='sarah' style={{fontSize:"30px"}}>SARAH SHUEY</p>
<p className='title'>Front End Developer</p>
</div>
<div className='aboutme'>
<p>Lover of dogs, tacos, and margaritas</p>
</div>
</div>
</div>
</div>

    );
  }
}

export default App;
