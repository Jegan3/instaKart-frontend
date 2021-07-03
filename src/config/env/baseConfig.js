export default {
  apiEndPoints: {
    getSignup: '/api/user/signUp',
    getLogin: '/api/user/login',
    getOtp: '/api/user/verifyUser',
    getVendorInfo: '/api/vendor/vendorinfo',
    getGeneralInfo: '/api/vendor/generalinfo',
    getVendorList: '/api/admin/vendorApplications',
    getVendorStatus: '/api/admin/applicationApproval',
    getIndustryInfo: '/api/vendor/getApprovedVendorInfo',
    getThriftCategory: '/api/staticContentRouter/getCategories',
  },

  apiBaseUrl: {
    dev: 'https://backend.insta-kart.com',
    prod: 'https://backend.insta-kart.com',
  },
};
