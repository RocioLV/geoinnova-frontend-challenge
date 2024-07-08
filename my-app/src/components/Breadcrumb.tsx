// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// function BreadcrumbItem() {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
//       <Breadcrumb.Item href="#">Breadcrumb 1.1</Breadcrumb.Item>
//     </Breadcrumb>
//   );
// }

// export default BreadcrumbItem;

import React from 'react';
import './Breadcrumb.css';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="breadcrumb">
      <span>Breadcrumb 1 / </span>
      <span> Breadcrumb 1.1</span>
    </nav>
  );
};

export default Breadcrumb;
