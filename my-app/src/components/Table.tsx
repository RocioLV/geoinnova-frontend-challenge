import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const Tables: React.FC = () => {
  const [selectedRadios, setSelectedRadios] = useState<number[]>(new Array(4).fill(-1));

  const handleRadioChange = (rowIndex: number, columnIndex: number) => {
    const newSelectedRadios = [...selectedRadios];
    newSelectedRadios[rowIndex] = columnIndex;
    setSelectedRadios(newSelectedRadios);
  };

  const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5', 'Row 6', 'Row 7'];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Row name</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row}</td>
            {new Array(6).fill(null).map((_, columnIndex) => (
              <td key={columnIndex}>
                <Form.Check
                  type="radio"
                  name={`row-${rowIndex}`}
                  id={`row-${rowIndex}-col-${columnIndex}`}
                  checked={selectedRadios[rowIndex] === columnIndex}
                  onChange={() => handleRadioChange(rowIndex, columnIndex)}
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
