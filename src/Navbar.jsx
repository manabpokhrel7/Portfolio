import './Navbar.css'; 
import React, { useRef } from 'react';
import First from './first/First';
import About from './second/About';
import Services from './third(Services)/Services';
import Port from './four(My Portfolio)/Port';
import Contactform from './footer/Contactform';
import MpIcon from '@mui/icons-material/Mp';


function Navbar() {
  const aboutRef = useRef(null);
  const portRef = useRef(null);



  return (
    <>
    <div className="navbar">
      <div className="logo">
        <MpIcon style={{ fontSize : '50px' }} />
      </div>
      <div className="menu">
        <ul>
        <li>Home</li>
        <li onClick={() => window.scrollTo({ top: aboutRef.current.offsetTop, behavior: 'smooth' })}>About</li>
        <li onClick={() => window.scrollTo({ top: portRef.current.offsetTop, behavior: 'smooth' })}>Portfolio</li>
        <li>Contact</li>

        </ul>
      </div>
    </div>
    <First />
    <div ref={aboutRef}><About /></div>
    <Services />
    <div ref={portRef}><Port /></div>
    <Contactform />
      </>
  );
}

export default Navbar;
