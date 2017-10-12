import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../images/menu.png'
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
          "backgroundColor": "white",
          "textAlign": "center",
          "color":"#4171c9",
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
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {this.props.children}
            <footer style={footer} className="col-lg-11">
            <div className='socialmedia'>
            <a href="#name-header">Sarah Shuey</a>
            <p>shueysarah@gmail.com | (214)437-7729</p>
            </div>
            <a target = "_blank" className = 'linkedin' href="https://www.linkedin.com/in/sarahshuey/"><img src="images/linkedin.png" alt="LinkedIn"></img></a>
            <a target = "_blank" className ='insta' href="https://www.instagram.com/sarahshuey/"><img src="images/instagram.png" alt="Instagram"></img></a>
            <a target = "_blank" className ='github' href="https://github.com/sarahshuey"><img src="images/github.png" alt="GitHub"></img></a>
            </footer>
          </div>
        );
        }
        }
export default BaseLayout;
