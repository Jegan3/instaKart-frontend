export const getVendorCompanyDetails = () => ({
  type: 'VENDOR_COMPANY_DETAILS_REQUEST',
});

export const getVendorCompanyDetailsSuccess = (vendorCompanyDetails) => ({
  type: 'VENDOR_COMPANY_DETAILS_SUCCESS',
  vendorCompanyDetails,
});

export const getVendorCompanyDetailsFailure = (error) => ({
  type: 'VENDOR_COMPANY_DETAILS_FAILURE',
  error,
});
