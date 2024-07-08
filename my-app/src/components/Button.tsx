import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

const Buttons: React.FC = () => {
  return (
    <div className="buttons-container">
      <Button variant="primary" className="custom-button">
        Button 1
      </Button>
      <Button variant="secondary" className="custom-button">
        Button 2
      </Button>
    </div>
  );
};

export default Buttons;
