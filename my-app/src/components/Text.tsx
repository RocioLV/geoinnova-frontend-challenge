import React from 'react';
import './Text.css';

const Texts: React.FC = () => {
  return (
    <div className="texts-container">
      <p className="breadcrumb">Breadcrumb 1 / Breadcrumb 1.1 </p>
      <h1 className="heading1">Heading 1</h1>
      <h2 className="heading2">Heading 2</h2>
      <p className="text-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et luctus lectus, sit amet congue libero. Sed mauris massa, rhoncus nec semper a, accumsan in tellus. Suspendisse potenti. Aenean iaculis non nibh eu ultrices. Pellentesque quis risus dictum, interdum enim at, faucibus turpis. Suspendisse a dictum quam. Vestibulum nisi massa, tempor sit amet elit et, sagittis vehicula eros. Nulla id faucibus sem, interdum maximus lorem. In id elit et ipsum vulputate accumsan.
      </p>
    </div>
  );
};

export default Texts;
