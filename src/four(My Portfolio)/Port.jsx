// Port.jsx
import React from 'react';
import './Port.css';
import WebsitePreview from './WebsitePreview';
import FlexboxGapStack from './Intro';

const Port = () => {
  return (
    <div className="port">
      <FlexboxGapStack />
      <div className="prev">
        <WebsitePreview />
      </div>
    </div>
  );
};

export default Port;
