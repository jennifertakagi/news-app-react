import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ label, type = 'button', primaryButton = true, changePage = false }) {
  const history = useHistory();

  /**
   * Handles with page's change on click
   */
  function handlePage() {
    if (changePage) {
      history.push(changePage);
    }
  }

  return (
    <button
      className={ `button ${primaryButton ? 'primary-button' : ''}` }
      type={ type }
      onClick={ handlePage }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  primaryButton: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
