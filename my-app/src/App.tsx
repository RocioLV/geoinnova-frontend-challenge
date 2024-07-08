import React from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Breadcrumb from '../src/components/Breadcrumb';
import Text from './components/Text';
import Files from './components/Files';
import Checkboxes from './components/Checkboxes';
import Divider from './components/Divider';
import Table from '../src/components/Table';
import Badges from './components/Badges';
import Buttons from './components/Button';
import './App.css';

const App: React.FC = () => {
  // Define los datos para la tabla (rows y columns)
  const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5', 'Row 6', 'Row 7'];
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6'];

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="main-container">
        <Breadcrumb />
        <div className="content-container">
          <div className="left-content">
            <Text />
            <Files />
            <Checkboxes />
            <Divider />
          </div>
          <div className="right-content">
            <Table rows={rows} columns={columns} />
            <div className="badges-container">
              <Badges />
            </div>
            <div className="buttons-container">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
