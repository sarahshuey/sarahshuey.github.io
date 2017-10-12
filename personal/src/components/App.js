import React, { Component } from 'react';
import '../styles/App.css';
import sarah from '../images/IMG_8737.JPG'


class App extends Component {
  render() {
    let infostyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      fontSize:"35px"
    }
    let resumestyle={
      textDecoration:"none",
      color:"#4171c9",
      paddingRight:"30px"
    }
    let contactstyle={
      textDecoration:"none",
      color:"#4171c9",
    }
    let headstyle={
      color:"#4171c9",
      textAlign:"center",
      alignSelf:"center",
      fontSize:"20px"
    }

    let imgstyle={
      height:"500px",
      paddingRight:"20px"
    }
    let style={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      paddingTop:"20px"
    }
    return (
<div className="App">
<div className='me' style={style}>
<img src={sarah} alt="Sarah and a Dog" style={imgstyle}></img>
<div className='mememe' style={headstyle}>
<div className = 'name-header'>
<p className='sarah' style={{fontSize:"30px"}}>SARAH SHUEY</p>
<p className='title'>Front End Developer</p>
</div>
<div className='aboutme'>
<p>Lover of dogs, tacos, and margaritas</p>
</div>
</div>
</div>
<div className='myinfo'style={infostyle}>
<p className='myresume'>
<a target = "_blank" href="sarah_shuey.pdf" style={resumestyle}>DOWNLOAD RESUME</a>
</p>
<p className ='email'>
  <a href="#socialmedia" style={contactstyle}>CONTACT ME</a>
</p>
</div>
</div>

    );
  }
}

export default App;
