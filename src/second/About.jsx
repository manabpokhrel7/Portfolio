
import React, { useRef } from 'react';
import './About.css'; // Import the CSS file
import imageSrc from '../Images/about.jpg';
import CustomTabPanel from './Info';
function About() {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef}>
    <div className="aboutcontainer">
      <h1 style={{ color: "#D70040" }}>About</h1>
      <p1>About Me</p1>
      <div className='content'>
      <div className='left'>
      <img src={imageSrc} alt="Rounded Corners" className="rounded-image" />
      </div>

      <div className='right'>
       <h1 style={{ color: "#D70040" }}>My name is Manab Pokhrel</h1><br></br>
<p1 className="info2"> <CustomTabPanel />
        </p1>
      </div>
      </div>
    </div>
    
    </div>
  );
}

export default About;

