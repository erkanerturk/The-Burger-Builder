import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Order from '../../components/Order/Order';

export class Orders extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;
