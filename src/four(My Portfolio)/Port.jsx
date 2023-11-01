import React from 'react';
import './Port.css';
import WebsitePreview from './WebsitePreview';


const Port = () => {
    return (
        <div className='port'>
           <h1 style={{ color: "#D70040" }}>Projects I worked on</h1>
            <div className='prev'>
                <WebsitePreview />
            </div>
        </div>
    );
}

export default Port;
