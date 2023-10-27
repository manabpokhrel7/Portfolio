import './Navbar.css';
import React, { useRef } from 'react';
import First from './first/First';
import About from './second/About';
import Services from './third(Services)/Services';
import Port from './four(My Portfolio)/Port';
import Contactform from './footer/Contactform';
import MpIcon from '@mui/icons-material/Mp';
import SimpleBottomNavigation from './ResponsiveAppBar';

function Navbar() {
  const aboutRef = useRef(null);
  const portRef = useRef(null);

  // Check if the screen width is less than or equal to 768px (adjust this as needed)
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {!isMobile && ( // Hide the main navbar on mobile
        <div className="navbar">
          <div className="logo">
            <MpIcon style={{ fontSize: '50px' }} />
          </div>
          <div className="menu-toggle" id="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="menu" id="menu">
            <ul>
              <li>Home</li>
              <li onClick={() => window.scrollTo({ top: aboutRef.current.offsetTop, behavior: 'smooth' })}>About</li>
              <li onClick={() => window.scrollTo({ top: portRef.current.offsetTop, behavior: 'smooth' })}>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
      {/* Render ButtonAppBar on mobile */}
      <First />
      <div ref={aboutRef}><About /></div>
      <Services />
      <div ref={portRef}><Port /></div>
      <Contactform />
      {isMobile && <SimpleBottomNavigation />} 
    </>
  );
}

export default Navbar;
