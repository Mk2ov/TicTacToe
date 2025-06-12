import React from 'react';
import Square from './Square';

export default function Board({ squares, onClick }) {
  return (
    <div style={boardStyle}>
      {squares.map((val, i) => (
        <Square key={i} value={val} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 80px)',
  gap: '10px',
  justifyContent: 'center',
  marginBottom: '20px',
};
