'use client'
import { useState } from "react";
import "../styles/TabContainer.css"
export default function TabContainer({ tabContents }) {
  const [activeTab, setActiveTab] = useState(tabContents[0]?.id || "");

  const showTabContent = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-container">
        <h1 className="ex-lab">Experience</h1>
      <div className="tab-hdr">
        <div className="tabs">
          {tabContents.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => showTabContent(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content-hldr">
          {tabContents.map((tab) => (
            <div
              key={tab.id}
              className="tab-content"
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
