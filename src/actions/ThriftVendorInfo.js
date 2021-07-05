export const getThriftVendorInfo = () => ({
  type: 'THRIFT_VENDOR_INFO_REQUEST',
});

export const getThriftVendorInfoSuccess = (thriftVendorInfo) => ({
  type: 'THRIFT_VENDOR_INFO_SUCCESS',
  thriftVendorInfo,
});

export const getThriftVendorInfoFailure = (error) => ({
  type: 'THRIFT_VENDOR_INFO_FAILURE',
  error,
});
