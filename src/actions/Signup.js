export const getSignup = (signupDetails) => ({
  type: 'SIGNUP_REQUEST',
  signupDetails,
});

export const getSignupSuccess = (signup) => ({
  type: 'SIGNUP_SUCCESS',
  signup,
});

export const getSignupFailure = (error) => ({
  type: 'SIGNUP_FAILURE',
  error,
});
