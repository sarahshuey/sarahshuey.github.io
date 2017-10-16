import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import preview1 from '../images/music.png'
import preview3 from '../images/directory.png'


class Projects extends Component {
  render() {
    return (
      <div className="allProjects">
      <div className ='pro'>
      <h2>Music Player</h2>
      <img src={preview1} alt="Music Player"></img>
      <div className="links">
      <div className="link1" style={{paddingRight:10}}>
      <Link  className="process" activeClassName="selected" to="/project1">View Process</Link>
      </div>
      <div>
      <Link className="live" activeClassName="selected" to="/project1">View Live</Link>
      </div>
      </div>
      </div>
      <div className ='pro'>
      <h2>Project Name</h2>
      <img src={preview1} alt="Music Player"></img>
      <div className="links">
      <div className="link1" style={{paddingRight:10}}>
      <Link className="process" activeClassName="selected" to="/project2">View Process</Link>
      </div>
      <div>
      <Link className="live" activeClassName="selected" to="/project2">View Live</Link>
      </div>
      </div>
      </div>
      <div className ='pro'>
      <h2>Company Directory</h2>
      <img src={preview3} alt="Comapny Directory"></img>
      <div className="links">
      <div className="link1" style={{paddingRight:10}}>
      <Link className="process" activeClassName="selected" to="/project3">View Process</Link>
      </div>
      <div>
      <Link className="live" activeClassName="selected" to="/project3">View Live</Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Projects;
