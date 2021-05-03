export default {
  apiEndPoints: {
    getSignup: '/api/user/signUp',
    getLogin: '/api/user/login',
    getUploadBanner: '/api/user/poster',
    getRetrieveBanner: '/api/admin/retrivePoster?adminemail=',
    getOtp: '/api/user/verifyUser',
    getSignupContent: '/api/staticContentRouter/registerStaticContents',
  },

  apiBaseUrl: {
    dev: 'http://54.91.179.217:8081',
    prod: 'http://54.91.179.217:8081',
  },
};
