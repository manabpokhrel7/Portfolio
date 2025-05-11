import React, { useRef } from 'react';
import './About.css';
import imageSrc from '../Images/about.jpg';
import SlideInSection from '../SlideInSection';
import FlexboxGapStack from './Intro';
import DynamicTabPanel from './TabPanel';

function About() {
  const aboutRef = useRef(null);

  return (
    <div ref={aboutRef} id="about">
      <SlideInSection>
        <div className="aboutcontainer">
          <FlexboxGapStack />

          <div className="content">
            {/* Profile Image */}
            <div className="left">
              <img
                src={imageSrc}
                alt="Manab Pokhrel working"
                className="rounded-image"
              />
            </div>

            {/* Dynamic Tab Info */}
            <div className="right">
              <DynamicTabPanel />
            </div>
          </div>
        </div>
      </SlideInSection>
    </div>
  );
}

export default About;
