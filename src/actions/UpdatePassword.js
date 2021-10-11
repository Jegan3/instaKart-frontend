export const getUpdatePassword = () => ({
  type: 'UPDATE_PASSWORD_REQUEST',
});

export const getUpdatePasswordSuccess = (updatePassword) => ({
  type: 'UPDATE_PASSWORD_SUCCESS',
  updatePassword,
});

export const getUpdatePasswordFailure = (error) => ({
  type: 'UPDATE_PASSWORD_FAILURE',
  error,
});
