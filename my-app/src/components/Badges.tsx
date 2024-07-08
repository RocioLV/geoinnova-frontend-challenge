import React from 'react';
import { Badge } from 'react-bootstrap';
import './Badges.css';

const Badges: React.FC = () => {
  const badges = Array.from({ length: 35 }, (_, i) => `Badge`);

  return (
    <div>
      <h3>Subtitle</h3>
      <div className="badge-container">
        {badges.map((badge, index) => (
          <Badge key={index} pill className="custom-badge">
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Badges;
