import React from 'react';
import './Header.css';
import menuIcon from '../assets/menu-icon.png';
import logo from '../assets/logo-gnv.png';
import bellIcon from '../assets/bell-icon.png';
import configIcon from '../assets/config-icon.png';
import userIcon from '../assets/user-icon.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
          <img src={logo} alt="Geoinnova Logo" className="logo" />
        </div>
        <div className="icons">
          <img src={bellIcon} alt="Bell Icon" />
          <img src={configIcon} alt="Config Icon" />
          <img src={userIcon} alt="User Icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
