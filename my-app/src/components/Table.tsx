import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

interface TablesProps {
  rows: string[];
  columns: string[];
}

const Tables: React.FC<TablesProps> = ({ rows, columns }) => {
  const [selectedRadio, setSelectedRadio] = useState<{ [key: number]: number }>({});

  const handleRadioChange = (rowIndex: number, columnIndex: number) => {
    setSelectedRadio((prevSelectedRadio) => ({
      ...prevSelectedRadio,
      [rowIndex]: columnIndex,
    }));
  };

  return (
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
            <td>{row}</td>
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
  );
};

export default Tables;
