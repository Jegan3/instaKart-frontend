export const getVendorStatus = (status) => ({
  type: 'VENDOR_STATUS_REQUEST',
  status,
});

export const getVendorStatusSuccess = (status) => ({
  type: 'VENDOR_STATUS_SUCCESS',
  status,
});

export const getVendorStatusFailure = (error) => ({
  type: 'VENDOR_STATUS_FAILURE',
  error,
});
