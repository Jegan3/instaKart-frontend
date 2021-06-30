export const getGeneralInfo = (generalInfo) => ({
  type: 'GENERAL_INFO_REQUEST',
  generalInfo,
});

export const getGeneralInfoSuccess = (generalInfo) => ({
  type: 'GENERAL_INFO_SUCCESS',
  generalInfo,
});

export const getGeneralInfoFailure = (error) => ({
  type: 'GENERAL_INFO_FAILURE',
  error,
});
