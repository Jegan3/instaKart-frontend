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

export const getStoreUpdate = () => ({
  type: 'STORE_INFO_UPDATE_REQUEST',
});

export const getStoreUpdateSuccess = (storeUpdate) => ({
  type: 'STORE_INFO_UPDATE_SUCCESS',
  storeUpdate,
});

export const getStoreUpdateFailure = (error) => ({
  type: 'STORE_INFO_UPDATE_FAILURE',
  error,
});
