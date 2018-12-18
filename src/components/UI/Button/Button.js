import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

button.propTypes = {
  btnType: PropTypes.oneOf(['Success', 'Danger']),
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default button;
