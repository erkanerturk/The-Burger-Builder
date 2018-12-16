import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = ({ elementType, elementConfig, value, label, changed }) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select className={classes.InputElement} value={value} onChange={changed}>
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  label: PropTypes.string,
  elementType: PropTypes.string,
  elementConfig: PropTypes.object,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
};

export default input;
