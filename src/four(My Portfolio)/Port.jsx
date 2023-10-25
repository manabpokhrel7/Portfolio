import React from 'react';
import './Port.css';
import WebsitePreview from './WebsitePreview';
const websiteUrl1 = 'https://manabpokhrel.netlify.app/';
const websiteUrl2 = 'https://chat.openai.com/';
const Port = () => {

  return (
    <div className='port'>
      <div className='prev'>
      <h1>Porjects I worked on</h1>
      <div className='left'><WebsitePreview url={websiteUrl1} /></div>
      <div className='right'><WebsitePreview url={websiteUrl2} /></div>
      </div>
    </div>
  );
}

export default Port;
