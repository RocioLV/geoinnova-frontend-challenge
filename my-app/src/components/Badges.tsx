import React from 'react';
import { Badge } from 'react-bootstrap';
import './Badges.css';

const Badges: React.FC = () => {
  const badges = Array.from({ length: 35 }, (_, i) => (
    <Badge key={i} pill className="custom-badge">
      Badge
    </Badge>
  ));

  return (
    <div className="badges-container">
      <h4 className="heading4">Subtitle</h4>
      <div className="badge-list">
        {badges}
      </div>
    </div>
  );
};

export default Badges;
