import React, { useState } from 'react';
import './Checkboxes.css';

const options = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8'
];

const Checkboxes: React.FC = () => {
  const [checked, setChecked] = useState(options.map((_, index) => index < 7));

  const handleChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="checkboxes-container">
      <h2 className="heading2">Heading 2</h2>
      {options.map((option, index) => (
        <div key={index} className="text-14">
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => handleChange(index)}
            className="custom-checkbox"
          />
          <label className="checkbox-label">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
