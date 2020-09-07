import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Input({ label, name, type, onChange }) {
  /**
   * Handles with value's input changes,
   * and emit the target to parent component
   * @param {HTMLEvent} event 
   */
  function handleValueChange (event) {
    onChange(event.target);
  }

  return (
    <div className="input-block">
      <label
        htmlFor={ name }
      >
        { label }
      </label>
      <input
        type={ type }
        id={ name } 
        onChange={ handleValueChange }
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
