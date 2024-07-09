import React from 'react';
import './Files.css';
import fileIcon from '../assets/file-icon.png';

const files = [
  'file-one.pdf',
  'file-two.pdf',
  'file-three.pdf',
  'file-four.pdf',
  'file-five.pdf',
  'file-six.pdf',
  'file-seven.pdf',
  'file-eight.pdf'
];

const Files: React.FC = () => {
  return (
    <div className="files-container">
      <h2 className="heading2">Heading 2</h2>
      <div className="files-grid">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <img src={fileIcon} alt="File Icon" className="file-icon" />
            <span className="text-14">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
