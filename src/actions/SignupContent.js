export const getSignupContent = () => ({
  type: 'SIGNUP_CONTENT_REQUEST',
});

export const getSignupContentSuccess = (signupContent) => ({
  type: 'SIGNUP_CONTENT_SUCCESS',
  signupContent,
});

export const getSignupContentFailure = (error) => ({
  type: 'SIGNUP_CONTENT_FAILURE',
  error,
});
