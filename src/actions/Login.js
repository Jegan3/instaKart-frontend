export const getLogin = (loginDetails) => ({
  type: 'LOGIN_REQUEST',
  loginDetails,
});

export const getLoginSucccess = (login) => ({
  type: 'LOGIN_SUCCESS',
  login,
});

export const getLoginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  error,
});
