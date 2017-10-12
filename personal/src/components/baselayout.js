import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../images/menu.png'
import insta from '../images/instagram.png'
import link from '../images/linkedin.png'
import git from '../images/github.png'

import '../styles/App.css';


class BaseLayout extends Component {
  render() {
    let navTitle = {
          "fontFamily": "Arizonia",
          "fontSize": "20px",
          "backgroundColor": 'white',
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
          "borderBottomWidth":"3px",
          "borderBottomColor":"#4171c9",
          "borderBottomStyle":"solid",
          "postion":"relative",
          "overflow":"hidden"
        }
        return (
          <div className="body">
            <nav className="row navbar navbar-inverse">
              <div className="container-fluid">
                <div style={border} className="navbar-header">
                  <div className="dropdown">
                    <button className="dropbtn"><img src={ham} alt="Menu"></img></button>
                    <div className="dropdown-content">
                      <a href="/">Home</a>
                      <a href="/about">About</a>
                      <a href="/allprojects">Projects</a>
                      <a href="/resume">Resume</a>
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
