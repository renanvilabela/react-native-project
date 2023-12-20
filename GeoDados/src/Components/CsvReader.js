import React, { useState } from 'react';
import Papa from 'papaparse'; // Importe a biblioteca papaparse

const CsvReader = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true, // Se o CSV tem cabeçalho
      dynamicTyping: true, // Detectar tipos de dados automaticamente
      skipEmptyLines: true, // Ignorar linhas vazias
      complete: (result) => {
        setCsvData(result.data);
      },
      error: (error) => {
        console.error('Erro ao ler o arquivo CSV:', error.message);
      },
    });
  };

  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {csvData.length > 0 && (
        <table>
          <thead>
            {Object.keys(csvData[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex === selectedRow ? 'selected' : ''}
                onClick={() => handleRowClick(rowIndex)}
              >
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CsvReader;