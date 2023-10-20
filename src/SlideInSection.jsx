import React, { useState, useEffect, useRef } from 'react';
import './SlideInSection.css'; // Import your CSS file for styling

function SlideInSection({ children }) {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      // Get the position of the section relative to the viewport
      const rect = section.getBoundingClientRect();
      
      // Determine if the section is at least partially in the viewport
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      setIsActive(isVisible);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial check when the component mounts
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`slide-in ${isActive ? 'active' : ''}`} ref={sectionRef}>
      {children}
    </div>
  );
}

export default SlideInSection;
