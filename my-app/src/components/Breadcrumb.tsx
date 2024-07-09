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
    <div className="breadcrumb">
      <p>Breadcrumb 1 / Breadcrumb 1.1 </p>
      <h1 className="heading1">Heading 1</h1>
    </div>
  );
};

export default Breadcrumb;
