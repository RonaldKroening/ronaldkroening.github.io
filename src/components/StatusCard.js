"use client"; // This directive makes the component a Client Component

import Link from 'next/link';
import "../styles/StatusCard.css";

const StatusCard = () => {
    const resume = {
        title: "View my Resume",
        imageUrl: "/file.svg",
        altText: "Open Resume",
        filePath: "/data/Ronald_Kroening_Resume.pdf"
    };

    const openResume = () => {
        window.open(resume.filePath, '_blank');
    };

    return (
        <div className='SMain'>
            <h3><strong>{resume.title}</strong></h3>
            <img 
                onClick={openResume} // Use the openResume function here
                id="status-res"
                width="40px" 
                height="40px" 
                src={resume.imageUrl} 
                alt={resume.altText} // Use the alt text from the object
                style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer
            />
            <h3><strong>Current Status</strong></h3>
            <h3>Open for Work</h3>
        </div>
    );
};

export default StatusCard;