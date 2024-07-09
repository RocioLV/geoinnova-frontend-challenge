import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

const Buttons: React.FC = () => {
  return (
    <div className="buttons-container">
      <Button variant="secondary" className="button-left">
        Button 1
      </Button>
      <Button variant="secondary" className="button-right">
        Button 2
      </Button>
    </div>
  );
};

export default Buttons;
