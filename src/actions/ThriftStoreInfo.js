export const getThriftStoreInfo = () => ({
  type: 'THRIFT_STORE_INFO_REQUEST',
});

export const getThriftStoreInfoSuccess = (thriftStoreInfo) => ({
  type: 'THRIFT_STORE_INFO_SUCCESS',
  thriftStoreInfo,
});

export const getThriftStoreInfoFailure = (error) => ({
  type: 'THRIFT_STORE_INFO_FAILURE',
  error,
});
