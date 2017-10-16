import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import insta from '../images/instagram.png'
import link from '../images/linkedin.png'
import git from '../images/github.png'

import '../styles/App.css';


class BaseLayout extends Component {
  render() {

        let linkStyle={
          textDecoration:"none",
          paddingRight:"10px",
          color:"white",
          fontFamily:"'Playfair Display', serif"
        }
        return (
          <div className="body" style={{backgroundColor:"#dae2ef"}}>
            <nav className="row navbar navbar-inverse" style={{backgroundColor:"#4171c9"}}>
              <div className="container-fluid">
                <div className="border">
                    <NavLink style={linkStyle} activeClassName="selected" to="/"> Home</NavLink>
                      <NavLink style={linkStyle} activeClassName="selected" to="/about"> About</NavLink>
                      <NavLink style={linkStyle} activeClassName="selected" to="/allprojects"> Projects </NavLink>
                      <NavLink style={linkStyle} activeClassName="selected" to="/resume"> Resume</NavLink>
                </div>
              </div>
            </nav>
            {this.props.children}
            <footer  className="col-lg-11">
            <div className='socialmedia'>
            <p>Sarah Shuey | shueysarah@gmail.com</p>
            </div>
            <a target = "_blank" className = 'linkedin' href="https://www.linkedin.com/in/sarahshuey/"><img src={link} alt="LinkedIn" style={{height:"20px",padding:"5px",margin:"5px"}}></img></a>
            <a target = "_blank" className ='insta' href="https://www.instagram.com/sarahshuey/"><img src={insta} alt="Instagram" style={{height:"20px",padding:"5px",margin:"5px"}}></img></a>
            <a target = "_blank" className ='github' href="https://github.com/sarahshuey"><img src={git} alt="GitHub" style={{height:"20px",padding:"5px",margin:"5px"}}></img></a>
            </footer>
          </div>
        );
        }
        }
export default BaseLayout;
