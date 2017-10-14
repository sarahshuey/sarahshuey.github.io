import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../images/blueham.png'
import insta from '../images/instagram.png'
import link from '../images/linkedin.png'
import git from '../images/github.png'
import logo from '../images/S.png'

import '../styles/App.css';


class BaseLayout extends Component {
  render() {
    let navTitle = {
          "fontFamily": "Arizonia",
          "fontSize": "20px",
          "backgroundColor": '#4171c9',
          "textAlign": "center",
          "textDecoration": "none",
          "display":"flex",
          "flexDirection": "row",
          "displayFlex": "row-reverse",
          "paddingLeft":"10px",
          "color":"#007F86",
        }
        let footer = {
          "backgroundColor": "#4171c9",
          "textAlign": "center",
          "color":"white",
          "borderTopWidth":"3px",
          "borderTopColor":"#4171c9",
          "borderTopStyle":"solid",
          "paddingTop":"25px"
        }
        let border ={
          "postion":"relative",
          "overflow":"hidden",
          "justifyContent":"center",
        }
        return (
          <div className="body">
            <nav className="row navbar navbar-inverse" style={{backgroundColor:"#4171c9"}}>
              <div className="container-fluid">
                <div style={border} className="navbar-header">
                <div className='logoimg'>
                <NavLink activeClassName="selected" to="/"><img src={logo} alt="logo"></img></NavLink>
                </div>
                  <div className="dropdown">
                    <button className="dropbtn"><img src={ham} alt="Menu"></img></button>
                    <div className="dropdown-content">
                    <NavLink activeClassName="selected" to="/"> Home</NavLink>
                      <NavLink activeClassName="selected" to="/about"> About</NavLink>
                      <NavLink activeClassName="selected" to="/allprojects"> Projects </NavLink>
                      <NavLink activeClassName="selected" to="/resume"> Resume</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {this.props.children}
            <footer style={footer} className="col-lg-11">
            <div className='socialmedia'>
            <a href="#name-header" style={{fontSize:"20px",color:"white",textDecoration:"none"}}>Sarah Shuey</a>
            <p>shueysarah@gmail.com | (214)437-7729</p>
            </div>
            <a target = "_blank" className = 'linkedin' href="https://www.linkedin.com/in/sarahshuey/"><img src={link} alt="LinkedIn" style={{height:"30px",padding:"10px",margin:"10px"}}></img></a>
            <a target = "_blank" className ='insta' href="https://www.instagram.com/sarahshuey/"><img src={insta} alt="Instagram" style={{height:"30px",padding:"10px",margin:"10px"}}></img></a>
            <a target = "_blank" className ='github' href="https://github.com/sarahshuey"><img src={git} alt="GitHub" style={{height:"30px",padding:"10px",margin:"10px"}}></img></a>
            </footer>
          </div>
        );
        }
        }
export default BaseLayout;
