export const getForgotPassword = () => ({
  type: 'FORGOT_PASSWORD_REQUEST',
});

export const getForgotPasswordSuccess = (forgotPassword) => ({
  type: 'FORGOT_PASSWORD_SUCCESS',
  forgotPassword,
});

export const getForgotPasswordFailure = (error) => ({
  type: 'FORGOT_PASSWORD_FAILURE',
  error,
});
