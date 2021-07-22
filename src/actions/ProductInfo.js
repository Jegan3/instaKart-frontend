export const getProductInfo = () => ({
  type: 'PRODUCT_INFO_REQUEST',
});

export const getProductInfoSuccess = (productInfo) => ({
  type: 'PRODUCT_INFO_SUCCESS',
  productInfo,
});

export const getProductInfoFailure = (error) => ({
  type: 'PRODUCT_INFO_FAILURE',
  error,
});
