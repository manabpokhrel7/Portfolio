// Port.jsx
import React from "react";
import "./Port.css";
import WebsitePreview from "./WebsitePreview";

const Port = () => (
  <div className="portfolio-container">
    <h2 className="portfolio-title">Featured Projects</h2>
    <p className="portfolio-subtitle">
      A selection of DevOps and Cloud Infrastructure projects showcasing
      automation, CI/CD, and Infrastructure as Code principles across AWS,
      Azure, and GCP.
    </p>
    <WebsitePreview />
  </div>
);

export default Port;
