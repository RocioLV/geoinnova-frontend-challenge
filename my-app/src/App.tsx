import React from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Breadcrumb from '../src/components/Breadcrumb';
import Text from './components/Text';
import Files from './components/Files';
import Checkboxes from './components/Checkboxes';
import Tables from '../src/components/Table'; 
import Badges from './components/Badges';
import Buttons from './components/Button';
import './App.css';

const App: React.FC = () => {
  const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5', 'Row 6', 'Row 7'];
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6'];

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-container">
          <div className="left-content">
            <Breadcrumb />
            <Text />
            <Files />
            <Checkboxes />
          </div>
          <div className="right-content">
            <Tables rows={rows} columns={columns} />
            <Badges />
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
