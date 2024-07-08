import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <div className="sidebar">
      <div
        className={`menu-item ${selectedItem === 1 ? 'selected' : ''}`}
        onClick={() => setSelectedItem(1)}
      >
        Menu item 1
      </div>
      <div
        className={`menu-item ${selectedItem === 2 ? 'selected' : ''}`}
        onClick={() => setSelectedItem(2)}
      >
        Menu item 2
      </div>
    </div>
  );
};

export default Sidebar;
