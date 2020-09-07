import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NewsCard from '../../components/NewsCard';
import Spinner from '../../components/Spinner';

import './styles.css';

function News({ news, categories, username = '' }) {
  const newsFirstRow = news.slice(0, 3);
  const newsSecondRow = news.slice(3, 6);
  const userLogged = Boolean(username);

  if (news && news.length) {
    return (
        <div id="news-page" className="container">
        <Header categories={categories} userLogged={userLogged} />
        <section className="first-section">
          {newsFirstRow.map((item) => {
            return (
              <NewsCard
                news={item}
                key={item.position}
              />
            )
          })}
        </section>
        <hr className="section-separator" />
        <section className="second-section">
          {newsSecondRow.map((item) => {
            return (
              <NewsCard
                news={item}
                key={item.position}
              />
            )
          })}
        </section>
      </div>
    );
  }
  return <Spinner />;
}

News.propTypes = {
  news: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  username: PropTypes.string
};

export default News;
