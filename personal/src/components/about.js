import React, { Component } from 'react';


class About extends Component {
  render() {
    let aboutStyle={
      display:"flex",
      flexDirection:"row",
      color:"#4171c9",
    }
    let textStyle={
      color:"black",
      lineHeight:"50px",
      paddingRight:"20px"
    }
    return (
      <div className="App">
        <header className="header" style={{color:"#4171c9"}}>
          <h1 className="title">About Us</h1>
        </header>
        <div className="page" style={aboutStyle}>
        <div className="SarahPic">
        </div>
        <div className="AboutSarah" style={{color:"#4171c9"}}>
        <h2> Sarah Shuey </h2>
      <p style={textStyle}> Hi there!
      My background is unique to me, and I am here to share it with you. To talk about where I am not is impossible to not first tell you about how I got here. To start during my highschool summers I attened a Military camp in northern Indiana where I learned not only to sail but also some of the most valuable life leasons. I learned the meaning of self discipline, how to be both a leader and a follower, and the importance of time management. Because of my summers in Indiana I decided to attened Inidana University where I began a undergrate degree in Business. After two years in school I decdied to head back down south and transfered to The Univeristy of Texas for my last two years of school studing Government. Upon graduation I accepted a job with a local start up, unforunantly for me the company closed its doors within three months of me starting there. At the time I was devestated but looking back on it I realize I would not be pursing something I throughly enjoy if this had not happend. Next I accepted a temp job with a local tech company in Austin doing data clean up. Because of this job I was able to see the ends and outs of the tech world and decdied I wanted to change my career path. Today I am a graudate of a three month immersive program and I am proud to say that I am a front end web developer. 
        </p>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
