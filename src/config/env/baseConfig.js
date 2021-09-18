export default {
  apiEndPoints: {
    getSignup: '/api/user/signUp',
    getLogin: '/api/user/login',
    getOtp: '/api/user/verifyUser',
    getVendorInfo: '/api/vendor/vendorinfo',
    getGeneralInfo: '/api/vendor/generalinfo',
    getVendorList: '/api/admin/vendorApplications',
    getVendorStatus: '/api/admin/applicationApproval',
    // getThriftVendorInfo: '/api/vendor/getApprovedVendorInfo',
    getStoreInfo: '/api/vendor/getEstoreInfo',
    getThriftCategory: '/api/vendor/getCategories',
    getThriftAddProduct: '/api/vendor/addProduct',
    getThriftDetails: '/api/staticContentRouter/getProducts',
    getThriftProfile: '/api/vendor/estoreInfo',
    getProductInfo: '/api/staticContentRouter/getProductInfo',
    getThriftStoreInfo: '/api/staticContentRouter/getStoreInfo',
    getAddCart: '/api/user/addToCart',
    getCart: '/api/user/getCart',
    getCheckout: '/api/user/completePaymet',
    getAddStore: '/api/vendor/createEstore',
    getVendorCompanyDetails: '/api/vendor/getEstores',
    getProductMessage: '/api/user/userProductEnquiry',
  },

  apiBaseUrl: {
    // dev: 'https://backend.insta-kart.com',
    // prod: 'https://backend.insta-kart.com',
    dev: 'http://localhost:8080',
    prod: 'https://localhost:8081',
  },
};
