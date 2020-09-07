import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function NewsCard({ news }) {
  const hasNewsImage = Boolean(news.image);
  const hasAvatarImage = Boolean(news.avatar);

  return (
    <div className="news-card">
      <h3
        className={ news.category }
      >
        {news.category}
      </h3>
      {hasNewsImage ?
        <img
          src={require(`../../assets/images/${news.image}`)}
          alt={news.title}
        />
        : null
      }
      <h2>{ news.title }</h2>
      <div className="avatar-box">
        {hasAvatarImage ?
          <img
            src={require(`../../assets/images/${news.avatar}`)}
            alt={news.author}
          />
          : null
        }
        <span>by { news.author }</span>
      </div>
      <p className="content">{ news.content }</p>
    </div>
  );
}

NewsCard.propTypes = {
  news: PropTypes.instanceOf(Object).isRequired
};

export default NewsCard;