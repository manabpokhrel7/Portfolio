
import React, { useRef } from 'react';
import './About.css'; // Import the CSS file
import imageSrc from '../Images/about.jpg';
import TabPanel from './InfoMob';
import SlideInSection from '../SlideInSection';
function About() {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef}>
      <SlideInSection>
    <div className="aboutcontainer">
      <h1 style={{ color: "#D70040" }}>About</h1>
      <div className='content'>
      <div className='left'>
      <img src={imageSrc} alt="Rounded Corners" className="rounded-image" />
      </div>

      <div className='right'>
<TabPanel />
      </div>
      </div>
    </div>
    </SlideInSection>
    </div>
  );
}

export default About;

