export default {
  apiEndPoints: {
    getSignup: '/api/user/signUp',
    getLogin: '/api/user/login',
    // getUploadBanner: '/api/user/poster',
    // getRetrieveBanner: '/api/admin/retrivePoster?adminemail=',
    getOtp: '/api/user/verifyUser',
    getSignupContent: '/api/staticContentRouter/registerStaticContents',
    getVendorInfo: '/api/vendor/vendorinfo',
    getVendorList: '/api/admin/vendorApplications',
    getVendorStatus: '/api/admin/applicationApproval',
    getIndustryInfo: '/api/vendor/getApprovedVendorInfo',
  },

  apiBaseUrl: {
    dev: 'https://backend.insta-kart.com',
    prod: 'https://backend.insta-kart.com',
  },
};
