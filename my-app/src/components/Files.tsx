import React from 'react';
import './Files.css';
import { BsFileEarmarkFill } from "react-icons/bs";

const Files: React.FC = () => {
  const files = [
    'file-one.pdf',
    'file-two.pdf',
    'file-three.pdf',
    'file-four.pdf',
    'file-five.pdf',
    'file-six.pdf',
    'file-seven.pdf',
    'file-eight.pdf',
  ];

  return (
    <div>
      <h2>Heading 2</h2>
      <div className="file-container">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <BsFileEarmarkFill size={40} />
            <p>{file}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
