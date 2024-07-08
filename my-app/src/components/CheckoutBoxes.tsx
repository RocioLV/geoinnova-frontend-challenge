import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CheckoutBoxesProps {
  options: string[];
}

const CheckoutBoxes: React.FC<CheckoutBoxesProps> = ({ options }) => {
  return (
    <div className="checkout-boxes">
      {options.map((option, index) => (
        <div key={index} className="checkout-box form-check">
          <input type="checkbox" id={option} className="form-check-input" />
          <label htmlFor={option} className="form-check-label">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckoutBoxes;