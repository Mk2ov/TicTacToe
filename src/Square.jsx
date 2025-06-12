import React from 'react';

export default function Square({ value, onClick }) {
  return (
    <button onClick={onClick} style={squareStyle}>
      {value}
    </button>
  );
}

const squareStyle = {
  width: '100%',
  aspectRatio: '1',           // квадрати
  fontSize: '2rem',           // адаптивно
  fontWeight: 'bold',
  color: '#333',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: '2px solid #333',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
