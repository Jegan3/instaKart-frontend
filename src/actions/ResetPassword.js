export const getResetPassword = () => ({
  type: 'RESET_PASSWORD_REQUEST',
});

export const getResetPasswordSuccess = (resetPassword) => ({
  type: 'RESET_PASSWORD_SUCCESS',
  resetPassword,
});

export const getResetPasswordFailure = (error) => ({
  type: 'RESET_PASSWORD_FAILURE',
  error,
});
