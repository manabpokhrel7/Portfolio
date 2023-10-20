import './Navbar.css'; // You can create a separate CSS file for styling
import imageSrc from './Images/logo.png';
import React, { useRef } from 'react';
import First from './first/First';
import About from './second/About';
import Services from './third(Services)/Services';
import Port from './four(My Portfolio)/Port';
import Contactform from './footer/Contactform';


function Navbar() {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img src={imageSrc} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li><a>Menu 1</a></li>
          <li><a onClick={handleScroll}>About</a></li>
          <li><a>Menu 3</a></li>
          <li><a>Menu 4</a></li>
        </ul>
      </div>
    </div>
    <First />
    <div ref={aboutRef}><About /></div>
    <Services />
    <Port />
    <Contactform />
      </>
  );
}

export default Navbar;
