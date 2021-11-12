export const getListYourAds = () => ({
  type: 'LIST_YOUR_ADS_REQUEST',
});

export const getListYourAdsSuccess = (advertiseNow) => ({
  type: 'LIST_YOUR_ADS_SUCCESS',
  advertiseNow,
});

export const getListYourAdsFailure = (error) => ({
  type: 'LIST_YOUR_ADS_FAILURE',
  error,
});
