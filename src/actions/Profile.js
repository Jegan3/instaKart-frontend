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

export const getProfileUpdate = () => ({
  type: 'PROFILE_UPDATE_REQUEST',
});

export const getProfileUpdateSuccess = (profileUpdate) => ({
  type: 'PROFILE_UPDATE_SUCCESS',
  profileUpdate,
});

export const getProfileUpdateFailure = (error) => ({
  type: 'PROFILE_UPDATE_FAILURE',
  error,
});
