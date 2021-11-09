export const getProfile = (profile) => ({
  type: 'PROFILE_REQUEST',
  profile,
});

export const getProfileSuccess = (profile) => ({
  type: 'PROFILE_SUCCESS',
  profile,
});

export const getProfileFailure = (error) => ({
  type: 'PROFILE_FAILURE',
  error,
});
