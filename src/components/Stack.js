'use client';

import { useState, useEffect } from 'react';
import StackCard from "../components/StackCard";
import "../styles/Stack.css"
const Stack = ({ fileName }) => {
  const [stackData, setStackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJsonData = async () => {
      try {
        const response = await fetch(fileName);
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const data = await response.json();
        
        const flattenedData = Object.entries(data).flatMap(([key, section]) =>
          section.data.map((name) => ({
            category: section.displayName,
            name,
          }))
        );

        setStackData(flattenedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJsonData();
  }, [fileName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
//https://icon.icepanel.io/Technology/svg/
  return (
    <div className='st-container'>
      <h1 className="tsl" id="tstack-lab">Technical Stack</h1>
      <div className="stack">
        
        {stackData.map((item, index) => (
          <div key={index} className="stack-item">
            <StackCard
              image="/fmwk.jpg" 
              title={item.name}
              category={item.category} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
