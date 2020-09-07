import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './pages/Login';
import Interests from './pages/Interests';
import News from './pages/News';

function Routes({ news, categories }) {
  const [username, setUserName] = useState('');

  function saveUsername (user) {
    setUserName(user)
  }

  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        component={() => <News news={news} categories={categories} username={username}  />} 
      />
      <Route
        path="/login"
        component={() => <Login onLogin={saveUsername} />}
      />
      <Route
        path="/interests"
        component={() => <Interests categories={categories} username={username} />}
      />
    </BrowserRouter>
  );
}

Routes.propTypes = {
  news: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired
};

export default Routes;
