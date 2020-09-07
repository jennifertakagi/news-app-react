import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import InterestItem from '../../components/InterestItem';
import Button from '../../components/Button';

import './styles.css';

function Interests({ categories, username = '' }) {
  return (
    <div id="interests-page" className="container">
      <Header />
      <main>
        <h1>welcome, <span>{ username }</span></h1>
        <h2>my interests</h2>
        <ul>
          {categories.map((category) => {
            return (
              <InterestItem
                label={ category }
              />
            )
          })}
        </ul>
        <Button label="save" changePage="/" />
        <Link to="/">
          <Button label="back to home" primaryButton={false} />
        </Link>
      </main>
    </div>
  );
}

Interests.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  username: PropTypes.string
};

export default Interests;