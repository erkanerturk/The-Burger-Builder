import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
  static propTypes = {};

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="street" placeholder="Your street" />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Your postal code"
          />
          <Button btnType="Success" clicked={()=>{}}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
