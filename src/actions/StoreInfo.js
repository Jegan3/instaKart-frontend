export const getStoreInfo = () => ({
  type: 'STORE_INFO_REQUEST',
});

export const getStoreInfoSuccess = (storeInfo) => ({
  type: 'STORE_INFO_SUCCESS',
  storeInfo,
});

export const getStoreInfoFailure = (error) => ({
  type: 'STORE_INFO_FAILURE',
  error,
});
