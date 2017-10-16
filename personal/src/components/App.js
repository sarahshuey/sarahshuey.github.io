import React, { Component } from 'react';
import '../styles/App.css';
import sarah from '../images/IMG_8737.JPG'
import pdf from '../documents/Sarah_Shuey_Blue.pdf'
import { Link } from 'react-router-dom';


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
      width:"350px",
      paddingRight:"20px",
      borderRadius:"280px",
    }
    let style={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      paddingTop:"20px",
      alignContent:"center",
      alignItems:"center",
      backgroundColor:"#dae2ef"
    }
    return (
<div className="App">
<div className='me' style={style}>
<img className='img'src={sarah} alt="Sarah and a Dog" style={imgstyle}></img>
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
</div>

    );
  }
}

export default App;
