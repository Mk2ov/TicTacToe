import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Game from './Game';
import News from './components/News';
import SubscribePage from './SubscribePage'; // імпортуй компонент
import './App.css';

function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ласкаво просимо до Game & News App</h1>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/game" style={linkStyle}>Гра</Link> |{" "}
        <Link to="/news" style={linkStyle}>Новини</Link> |{" "}
        <Link to="/subscribe" style={linkStyle}>Підписка</Link>
      </nav>
    </div>
  );
}

function GamePage() {
  return (
    <div className="game-section">
      <h2>Tic Tac Toe Game</h2>
      <Game />
    </div>
  );
}

function NewsPage() {
  return (
    <div className="news-section">
      <h2>Новини</h2>
      <News />
    </div>
  );
}

const linkStyle = {
  fontSize: '18px',
  padding: '10px',
  textDecoration: 'none',
  color: '#3498db',
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Game & News App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="*" element={<h2>Сторінку не знайдено</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
