import React from 'react';
import Game from './Game';
import './index.css';

export default function App() {
  return (
    <div style={styles.container}>
      <Game />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box',
  },
};
