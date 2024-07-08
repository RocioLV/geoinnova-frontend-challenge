import React from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Breadcrumb from '../src/components/Breadcrumb';
import Table from '../src/components/Table';
import Buttons from './components/Button';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar items={['Pages', 'Page 1', 'Pantalla 1']} />
      <Breadcrumb />
      <Table
        rows={[
          ['Row 1', '°', 'о', 'о', 'о'],
          ['Row 2', '○', '°', 'О', '○'],
          ['Row 3', 'O', 'о']
          ]}
          />,
      <Buttons />
    </div>
    )
}
    
export default App;