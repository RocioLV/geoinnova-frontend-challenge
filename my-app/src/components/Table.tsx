import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

interface TablesProps {
  rows: string[];
  columns: string[];
}

const Tables: React.FC<TablesProps> = ({ rows, columns }) => {
  const initialSelectedRadio = rows.reduce((acc, _, index) => {
    if (index < 6) {
      acc[index] = 0; // Seleccionar la primera columna para los primeros 6
    }
    return acc;
  }, {} as { [key: number]: number });

  const [selectedRadio, setSelectedRadio] = useState<{ [key: number]: number }>(initialSelectedRadio);

  const handleRadioChange = (rowIndex: number, columnIndex: number) => {
    setSelectedRadio((prevSelectedRadio) => ({
      ...prevSelectedRadio,
      [rowIndex]: columnIndex,
    }));
  };

  return (
    <div className="table-container">
      <h2 className="heading2">Heading 2</h2>
      <p className="text-16">
        Roin nunc quam, auctor placerat iaculis eu, vulputate eu mi.
      </p>
      <Table bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Row name</th>
            {columns.map((col, colIndex) => (
              <th key={colIndex}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="text-16">{row}</td>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="radio"
                    name={`row-${rowIndex}`}
                    checked={selectedRadio[rowIndex] === colIndex}
                    onChange={() => handleRadioChange(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
