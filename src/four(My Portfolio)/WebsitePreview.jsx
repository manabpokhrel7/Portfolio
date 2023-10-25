import React from 'react';
import "./WebsitePreview.css";
function WebsitePreview({ url }) {
  return (
    <div className="website-preview">
      <iframe
        title="Website Preview"
        src={url}
        frameBorder="0"
        width="50%"
        height= "400px" // Adjust the height as needed
      />
    </div>
  );
}

export default WebsitePreview;
