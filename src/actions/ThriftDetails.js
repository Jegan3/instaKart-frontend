export const getThriftDetails = () => ({
  type: 'THRIFT_DETAILS_REQUEST',
});

export const getThriftDetailsSuccess = (thriftDetails) => ({
  type: 'THRIFT_DETAILS_SUCCESS',
  thriftDetails,
});

export const getThriftDetailsFailure = (error) => ({
  type: 'THRIFT_DETAILS_FAILURE',
  error,
});
