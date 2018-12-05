import React from 'react';
import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

logo.propTypes = {
  height: PropTypes.string,
};

export default logo;
