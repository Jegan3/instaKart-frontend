export const getProfile = () => ({
  type: 'PROFILE_REQUEST',
});

export const getProfileSuccess = (profile) => ({
  type: 'PROFILE_SUCCESS',
  profile,
});

export const getProfileFailure = (error) => ({
  type: 'PROFILE_FAILURE',
  error,
});
