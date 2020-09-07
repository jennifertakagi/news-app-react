import React, { useState, useEffect } from 'react';
import Routes from './routes';

import api from './services/api';

import './assets/styles/global.css';

function App() {
  const categories = ['politics', 'business', 'tech', 'science', 'sports'];

  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/sampleNews')
      .then(response => {
        const { articles } = response.data;
        setNews(articles)
      })
  }, []);

  return (
    <Routes news={news} categories={categories} />
  );
}

export default App;
