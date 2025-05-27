// About.jsx
import React, { useRef } from 'react';
import './About.css';
import SlideInSection from '../SlideInSection';
import FlexboxGapStack from './Intro';
import DynamicTabPanel from './TabPanel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

function About() {
  const aboutRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      ref={aboutRef}
      id="about"
      style={{
        backgroundColor: theme.palette.background.default,
        padding: isMobile ? '1.5rem 1rem' : '2rem 0',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <SlideInSection>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            gap: 4,
            px: isMobile ? 2 : 4,
          }}
        >
          <FlexboxGapStack />

          <Box sx={{ flex: 1 }}>
            <DynamicTabPanel />
          </Box>
        </Box>
      </SlideInSection>
    </div>
  );
}

export default About;
