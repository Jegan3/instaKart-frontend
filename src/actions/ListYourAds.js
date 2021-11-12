export const getListYourAds = () => ({
  type: 'LIST_YOUR_ADS_REQUEST',
});

export const getListYourAdsSuccess = (listyourads) => ({
  type: 'LIST_YOUR_ADS_SUCCESS',
  listyourads,
});

export const getListYourAdsFailure = (error) => ({
  type: 'LIST_YOUR_ADS_FAILURE',
  error,
});
