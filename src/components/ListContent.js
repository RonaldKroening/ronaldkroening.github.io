'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ResumeItem from "../components/ResumeItem.js";
import ProjectItem from "../components/ProjectItem.js"

export default function ListContent({ file }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${file}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [file]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="listcon-main">
      {data.map((item, index) => {
        if (item.projectName) {
          return (
            <ProjectItem
            key={index}project={item}
            />
          );
        }


        return (
          <ResumeItem
            key={index}
            institution={item.institution}
            position={item.position || item.title}
            {...(item.jobType && { jobType: " | "+item.jobType })}
            img={item.img}
            location={item.location || ""}
            dateRange={item.dateRange || item.asOf}
            description={item.description || ""}
            link={item.link || ""}
          />
        );
      })}
    </div>
  );
}
