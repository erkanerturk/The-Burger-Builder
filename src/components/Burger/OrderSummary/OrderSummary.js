import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchasableCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.object.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  purchasableCanceled: PropTypes.func.isRequired,
};

export default orderSummary;
