import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FilesProps {
  files: string[];
}

const Files: React.FC<FilesProps> = ({ files }) => {
  return (
    <ul className="files list-group">
      {files.map((file, index) => (
        <li key={index} className="list-group-item">{file}</li>
      ))}
    </ul>
  );
};

export default Files;