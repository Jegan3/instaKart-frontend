export default {
  apiEndPoints: {
    getSignup: '/api/user/signUp',
    getLogin: '/api/user/login',
    getOtp: '/api/user/verifyUser',
    getVendorInfo: '/api/vendor/vendorinfo',
    getGeneralInfo: '/api/vendor/generalinfo',
    getVendorList: '/api/admin/vendorApplications',
    getVendorStatus: '/api/admin/applicationApproval',
    getThriftVendorInfo: '/api/vendor/getApprovedVendorInfo',
    getThriftCategory: '/api/staticContentRouter/getCategories',
    getThriftAddProduct: '/api/vendor/addProduct',
    getThriftDetails: '/api/staticContentRouter/getProducts',
    getThriftProfile: '/api/vendor/estoreInfo',
    getProductInfo: '/api/getProductInfo',
    getThriftStoreInfo: '/api/staticContentRouter/getStoreInfos',
  },

  apiBaseUrl: {
    dev: 'https://backend.insta-kart.com',
    prod: 'https://backend.insta-kart.com',
  },
};
