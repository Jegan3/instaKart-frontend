export const getUserList = () => ({
  type: 'USER_LIST_REQUEST',
});

export const getUserListSuccess = (userList) => ({
  type: 'USER_LIST_SUCCESS',
  userList,
});

export const getUserListFailure = (error) => ({
  type: 'USER_LIST_FAILURE',
  error,
});
