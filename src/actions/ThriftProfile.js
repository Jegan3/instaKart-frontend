export const getThriftProfile = (profileInfo) => ({
  type: 'THRIFT_PROFILE_REQUEST',
  profileInfo,
});

export const getThriftProfileSuccess = (profileInfo) => ({
  type: 'THRIFT_PROFILE_SUCCESS',
  profileInfo,
});

export const getThriftProfileFailure = (error) => ({
  type: 'THRIFT_PROFILE_FAILURE',
  error,
});
