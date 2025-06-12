import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, clearNews } from '../store/newsSlice';
import './News.css';

const News = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, lastUpdated } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
    return () => {
      dispatch(clearNews());
    };
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchNews());
  };

  if (loading) {
    return (
      <div className="news-container">
        <div className="news-loading">
          <div className="loading-spinner"></div>
          <p>Loading latest US news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-container">
        <div className="news-error">
          <p>Error loading news: {error}</p>
          <button onClick={handleRefresh} className="refresh-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <div className="news-header">
        <h2>Latest US News</h2>
        <div className="news-controls">
          {lastUpdated && (
            <span className="last-updated">
              Last updated: {new Date(lastUpdated).toLocaleTimeString()}
            </span>
          )}
          <button onClick={handleRefresh} className="refresh-button">
            Refresh News
          </button>
        </div>
      </div>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="news-meta">
                <div className="news-source">
                  <span className="source-name">{article.source?.name}</span>
                  <span className="publish-date">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News; 