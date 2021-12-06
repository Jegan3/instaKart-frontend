
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

export const getProductDelete = () => ({
  type: 'PRODUCT_DELETE_REQUEST',
});

export const getProductDeleteSuccess = (productDelete) => ({
  type: 'PRODUCT_DELETE_SUCCESS',
  productDelete,
});

export const getProductDeleteFailure = (error) => ({
  type: 'PRODUCT_DELETE_FAILURE',
  error,
});

