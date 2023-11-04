import React, { useRef } from 'react';
import './First.css'; // You can create a separate CSS file for styling
import './Manabtext.css';
import SlideInSection from '../SlideInSection';
import Button from '@mui/material/Button';
import HorizontalNonLinearStepper from './Skills';


function First() {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  return (
    <div className='first'>
      <SlideInSection>
        <h1 style={{ color: "#00000" }}>My Name is</h1>
        <div className="waviy">
          <span style={{ '--i': 1 }}>M</span>
          <span style={{ '--i': 2 }}>a</span>
          <span style={{ '--i': 3 }}>n</span>
          <span style={{ '--i': 4 }}>a</span>
          <span style={{ '--i': 5 }}>b</span>&nbsp;&nbsp;
          <span style={{ '--i': 1 }}>P</span>
          <span style={{ '--i': 2 }}>o</span>
          <span style={{ '--i': 3 }}>k</span>
          <span style={{ '--i': 4 }}>h</span>
          <span style={{ '--i': 5 }}>r</span>
          <span style={{ '--i': 4 }}>e</span>
          <span style={{ '--i': 5 }}>l</span>
        </div>
        <HorizontalNonLinearStepper />
        <Button variant="outlined" size="large" style={{ color: "#D70040" }} onClick={handleScroll} className='custom-button'>
          SEE PORTFOLIO
        </Button>
      </SlideInSection>
      <div ref={aboutRef}></div>
    </div>
  );
}

export default First;
