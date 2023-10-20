import React, { useState } from 'react';
import './Services.css';
import ReusableModal from './ReusableModal.jsx'; // Import the ReusableModal component
import Arrow from './Arrow';
import SlideInSection from '../SlideInSection';

function Services() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  // Define similar states and functions for other modals

  return (
    <div className='Services'>
      <SlideInSection>
      <p>Services</p>
      <h1>I provide a wide range of digital services</h1>
      <div className='mbox-container'>
      <div onClick={() => setModal1Open(true)} className='mbox'>
        Open Modal 1
        <p>Learn More</p><Arrow />
      </div>
      <div onClick={() => setModal2Open(true)} className='mbox'>
        Open Modal 2
        <p>Learn More</p><Arrow />
      </div>
      </div>
      {/* Add more buttons to open other modals if needed */}
      <ReusableModal
        open={modal1Open}
        onClose={() => setModal1Open(false)}
        title="Modal 1 Title"
        content="Content for Modal 1"
      />
      <ReusableModal
        open={modal2Open}
        onClose={() => setModal2Open(false)}
        title="Modal 2 Title"
        content="Content for Modal 2"
      />
      </SlideInSection>
      {/* Render additional modals with different content */}
    </div>
    
  );
}

export default Services;
