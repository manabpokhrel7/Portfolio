import React from 'react';

function WebsitePreview({ url }) {
  return (
    <div className="website-preview">
      <iframe
        title="Website Preview"
        src={url}
        frameBorder="0"
        width="100%"
        height="500px" // Adjust the height as needed
      />
    </div>
  );
}

export default WebsitePreview;
