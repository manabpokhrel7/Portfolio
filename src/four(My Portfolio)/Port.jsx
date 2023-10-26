import React from 'react';
import './Port.css';
import WebsitePreview from './WebsitePreview';

const websiteUrl1 = 'https://manabpokhrel.netlify.app/';
const websiteUrl2 = 'https://chat.openai.com/';

const Port = () => {
    return (
        <div className='port'>
           <h1 style={{ color: "#D70040" }}>Projects I worked on</h1>
            <div className='prev'>
                <WebsitePreview url={websiteUrl1} />
                <WebsitePreview url={websiteUrl2} />
            </div>
        </div>
    );
}

export default Port;
