'use client';

import { useState, useEffect } from 'react';
import React from "react";
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
