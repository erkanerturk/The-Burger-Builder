import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  let inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) inputClasses.push(classes.Invalid);

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
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
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  label: PropTypes.string,
  elementType: PropTypes.string,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.object,
  touched: PropTypes.bool,
  changed: PropTypes.func.isRequired,
};

export default input;
