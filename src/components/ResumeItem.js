'use client';

import React, { useState, useEffect } from "react";
import "../styles/ResumeItem.css";

const ResumeItem = ({
  institution,
  position,
  jobType,
  img,
  location,
  dateRange,
  description,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="resume-wrapper">
        <div className="resume-item">
          <div className="resume-header">
            <div className="res-sep-hdr">
              <div className="resume-logo">
                <img className="resume-img" src={`logos/${img}`} alt="Image" />
              </div>
              <h3 className="resume-institution">{institution}</h3>
            </div>
            <div className="resume-info">
              <div className="resume-position-details">
                <h3 className="resume-position">{position}</h3>
                <h3 className="resume-job-type">{jobType}</h3>
              </div>
            </div>
            <div className="resume-meta">
              <div className="resume-location">{location}</div>
              <div className="resume-dates">{dateRange}</div>
            </div>
          </div>
          {/* <p className="resume-description">{description}</p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="resume-wrapper">
      <div className="resume-item">
        <div className="resume-header">
          <div className="resume-logo">
            <img className="resume-img" src={`logos/${img}`} alt="Image" />
          </div>
          <div className="resume-info">
            <h3 className="resume-institution">{institution}</h3>
            <div className="resume-position-details">
              <span className="resume-position">{position}</span>
              <span className="resume-divider">|</span>
              <span className="resume-job-type">{jobType}</span>
            </div>
          </div>
          <div className="resume-meta">
            <div className="resume-location">{location}</div>
            <div className="resume-dates">{dateRange}</div>
          </div>
        </div>
        <p className="resume-description">{description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
