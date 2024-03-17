'use client'
import React, { useState } from 'react';

const Dropdown = ({freq, func}: {freq:string, func:any}) => {
  const [selectedText, setSelectedText] = useState('');
 
  const handleChange = (event: any) => {
    setSelectedText(event.target.value);
    freq = event.target.value;
    func(event.target.value);
    
  };

  return (
    <select value={selectedText} onChange={handleChange}>
      <option value="Yearly">Yearly</option>
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Daily">Daily</option>
    </select>
  );
};

export default Dropdown;