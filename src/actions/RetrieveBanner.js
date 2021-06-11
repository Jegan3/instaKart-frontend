export const getBannerRetrieve = (email) => ({
  type: 'BANNER_RETRIEVE_REQUEST',
  email,
});

export const getBannerRetrieveSuccess = (banner) => ({
  type: 'BANNER_RETRIEVE_SUCCESS',
  banner,
});

export const getBannerRetrieveFailure = (error) => ({
  type: 'BANNER_RETRIEVE_FAILURE',
  error,
});
