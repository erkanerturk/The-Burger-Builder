import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = ({ elementType, elementConfig, value, label }) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = <input className={classes.InputElement} {...elementConfig} value={value} />;
      break;
    case 'textarea':
      inputElement = <textarea className={classes.InputElement} {...elementConfig} value={value} />;
      break;
    case 'select':
      inputElement = (
        <select className={classes.InputElement} value={value}>
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={classes.InputElement} {...elementConfig} value={value} />;
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
  value: PropTypes.string,
};

export default input;
