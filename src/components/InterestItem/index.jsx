import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function InterestItem({ label }) {
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggles if the interest is active
   */
  function toggleActive () {
    setIsActive(!isActive);
  }

  return (
    <li
      className={ `category-interest ${label} ${isActive ? 'active' : ''}` }
      onClick={ toggleActive }
    >
      { label }
    </li>
  );
}

InterestItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InterestItem;
