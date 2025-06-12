import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Переможець: ${winner}`
    : `Хід: ${isXNext ? 'X' : 'O'}`;

  function handleClick(i) {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = isXNext ? 'X' : 'O';
    setSquares(next);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{status}</h2>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={resetGame} style={buttonStyle}>Почати заново</button>
    </div>
  );
}

function calculateWinner(sq) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#3498db',
  color: '#000000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
