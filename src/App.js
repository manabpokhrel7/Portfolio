
import './App.css';
import React from 'react'; // Import useRef from React, not react-router-dom
import FixedBottomNavigation from './Mobnav';
import BackToTop from './ResponsiveAppBar';




function App() {
 
    
  return (
    <div className="App">
      <BackToTop />
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
