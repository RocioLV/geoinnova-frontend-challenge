import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbItem() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Breadcrumb 1.1</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbItem;