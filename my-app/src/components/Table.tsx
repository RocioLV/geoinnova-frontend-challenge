// Tables.tsx

import React, { useState } from 'react';

interface TableProps {
  rows: string[];
  columns: string[];
}

const Tables: React.FC<TableProps> = ({ rows, columns }) => {
  // Estado para almacenar la selección de radio buttons por fila
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({
    row1: 'Column 1', // Valores iniciales según la tabla
    row2: 'Column 2',
    row3: 'Column 3',
    row4: 'Column 4',
    row5: 'Column 5',
    row6: 'Column 6',
    row7: '', // Row 7 inicialmente no seleccionado
  });

  // Manejar el cambio de selección de radio button
  const handleOptionChange = (rowName: string, colName: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [rowName]: colName,
    }));
  };

  return (
    <div className="table-section">
      <h2>Heading 2</h2>
      <p>Roin nunc quam, auctor placerat iaculis eu, vulputate eu mi.</p>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Row name</th>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row}</td>
                {columns.map((col, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`}>
                    <input
                      type="radio"
                      name={`row-${rowIndex}-radio`}
                      checked={selectedOptions[row] === col}
                      onChange={() => handleOptionChange(row, col)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
