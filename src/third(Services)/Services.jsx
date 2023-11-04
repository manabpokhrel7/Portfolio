import React, { useState } from 'react';
import './Services.css';
import ReusableModal from './ReusableModal.jsx'; // Import the ReusableModal component
import Arrow from './Arrow';
import SlideInSection from '../SlideInSection';
import LanguageIcon from '@mui/icons-material/Language';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import webImage from './web.png';
import photo from './photo.jpg';
import FlexboxGapStack from './Intro';
function Services() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  // Define similar states and functions for other modals

  return (
    <div className='Services'>
      <SlideInSection>
        <FlexboxGapStack />
      <div className='mbox-container'>
      <div onClick={() => setModal1Open(true)} className='mbox'>
      <p>WebDev</p>
      <LanguageIcon style={{ paddingBottom: '50px' }} />
        <Arrow />
      </div>
      <div onClick={() => setModal2Open(true)} className='mbox'>
      <p>Photoshop</p>
        <MonochromePhotosIcon style={{ paddingBottom: '50px' }}/>
        <Arrow />
      </div>
      </div>
      {/* Add more buttons to open other modals if needed */}
      <ReusableModal
        open={modal1Open}
        onClose={() => setModal1Open(false)}
        title="Web Developer"
        content={<>
          <img src={webImage} alt="WebDev" className='web' style={{ overflow: 'visible', maxWidth: '100%' }}/>
          <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
        </>}
      />
      <ReusableModal
        open={modal2Open}
        onClose={() => setModal2Open(false)}
        title="Photoshop"
        content={<>
          <img src={photo} alt="WebDev" className='photo' style={{ overflow: 'visible', maxWidth: '100%' }}/>
          <p>Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing. </p>
          Photoshop is a photo editing and raster graphic design software which allows users to create, edit, and manipulate various graphics as well as digital art. It also allows to create and edit raster images with multiple layers and import the images in various file formats.</>}
      />
      </SlideInSection>
      {/* Render additional modals with different content */}
    </div>
    
  );
}

export default Services;
