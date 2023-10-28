import './Navbar.css';
import React, { useRef } from 'react';
import First from './first/First';
import About from './second/About';
import Services from './third(Services)/Services';
import Port from './four(My Portfolio)/Port';
import Contactform from './footer/Contactform';
import MpIcon from '@mui/icons-material/Mp';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Navbar() {
  const aboutRef = useRef(null);
  const portRef = useRef(null);
  const [value, setValue] = React.useState(0);

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

      {/*Mobile navbar */}
      {isMobile &&   <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div ref={aboutRef}><BottomNavigationAction label="Recents" icon={<RestoreIcon />} /></div>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box> } 
    </>
  );
}

export default Navbar;
