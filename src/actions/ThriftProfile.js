export const getThriftProfile = () => ({
  type: 'THRIFT_PROFILE_REQUEST',
});

export const getThriftProfileSuccess = (profile) => ({
  type: 'THRIFT_PROFILE_SUCCESS',
  profile,
});

export const getThriftProfileFailure = (error) => ({
  type: 'THRIFT_PROFILE_FAILURE',
  error,
});
