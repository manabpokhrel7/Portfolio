import React, { useRef } from 'react';
import './About.css';
import imageSrc from '../Images/about.jpg';
import SlideInSection from '../SlideInSection';
import FlexboxGapStack from './Intro';
import DynamicTabPanel from './TabPanel';
import { useTheme } from '@mui/material/styles';

function About() {
  const aboutRef = useRef(null);
  const theme = useTheme();

  return (
    <div
      ref={aboutRef}
      id="about"
      style={{
        backgroundColor: theme.palette.background.default,
        padding: '2rem 0',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
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
