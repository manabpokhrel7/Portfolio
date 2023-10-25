import React from 'react';
import './Port.css';
import WebsitePreview from './WebsitePreview';
const websiteUrl = 'https://manabpokhrel.netlify.app/'
const Port = () => {

  return (
    <div className='port'>
      <h1>Website Preview</h1>
      <WebsitePreview url={websiteUrl} />
    </div>
  );
}

export default Port;
