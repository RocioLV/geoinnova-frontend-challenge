import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Checkbox.css';

const Checkboxes: React.FC = () => {
  const [checked, setChecked] = useState([
    true, true, true, true, true, true, true, false,
  ]);

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <Form>
      <h2>Heading 2</h2>
      {checked.map((isChecked, index) => (
        <div key={index} className="mb-3 checkbox-container">
          <Form.Check
            type="checkbox"
            id={`checkbox-${index}`}
            label={`Option ${index + 1}`}
            checked={isChecked}
            onChange={() => handleCheckboxChange(index)}
          />
        </div>
      ))}
    </Form>
  );
};

export default Checkboxes;
