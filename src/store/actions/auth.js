import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (authData) => ({
  type: actionTypes.AUTH_SUCCESS,
  authData: authData,
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error: error,
});

export const auth = (email, password) => (dispatch) => {
  dispatch(authStart());

  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  axios
    .post(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBCLmcFPNAxmdLBIWISZ7kzTQymkejGmqI',
      authData
    )
    .then((res) => {
      console.log(res);
      dispatch(authSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
};
