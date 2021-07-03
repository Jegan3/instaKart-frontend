export const getThriftAddProduct = (thriftAddProduct) => ({
  type: 'THRIFT_ADD_PRODUCT_REQUEST',
  thriftAddProduct,
});

export const getThriftAddProductSuccess = (thriftAddProduct) => ({
  type: 'THRIFT_ADD_PRODUCT_SUCCESS',
  thriftAddProduct,
});

export const getThriftAddProductFailure = (error) => ({
  type: 'THRIFT_ADD_PRODUCT_FAILURE',
  error,
});
