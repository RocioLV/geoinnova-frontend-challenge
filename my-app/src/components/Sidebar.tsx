import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Menu item 1');

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="sidebar">
      <div 
        className={`menu-item ${selectedMenuItem === 'Menu item 1' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('Menu item 1')}
      >
        Menu item 1
      </div>
      <div 
        className={`menu-item ${selectedMenuItem === 'Menu item 2' ? 'selected' : ''}`}
        onClick={() => handleMenuItemClick('Menu item 2')}
      >
        Menu item 2
      </div>
    </div>
  );
};

export default Sidebar;
