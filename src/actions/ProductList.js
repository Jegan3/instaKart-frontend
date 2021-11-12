
export const getProductList = () => ({
  type: 'PRODUCT_LIST_REQUEST',
});

export const getProductListSuccess = (productList) => ({
  type: 'PRODUCT_LIST_SUCCESS',
  productList,
});

export const getProductListFailure = (error) => ({
  type: 'PRODUCT_LIST_FAILURE',
  error,
});
