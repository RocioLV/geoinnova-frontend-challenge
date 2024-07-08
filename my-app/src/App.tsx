import React from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Breadcrumb from '../src/components/Breadcrumb';
import Text from './components/Text';
import Files from './components/Files';
import Checkboxes from './components/Checkbox';
import Table from '../src/components/Table';
import Badges from './components/Badges';
import Buttons from './components/Button';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Breadcrumb />
      <Text />
      <Files />
      <Checkboxes />
      <Table />
      <Badges />
      <Buttons />
    </div>
    )
}
    
export default App;