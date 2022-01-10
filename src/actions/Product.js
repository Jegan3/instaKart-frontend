export const addProductRequest = () => ({
  type: 'ADD_PRODUCT_REQUEST',
});

export const addProductSuccess = (addProduct) => ({
  type: 'ADD_PRODUCT_SUCCESS',
  addProduct,
});

export const addProductFailure = (error) => ({
  type: 'ADD_PRODUCT_FAILURE',
  error,
});

export const getProduct = () => ({
  type: 'GET_PRODUCT_REQUEST',
});

export const getProductSuccess = (product) => ({
  type: 'GET_PRODUCT_SUCCESS',
  product,
});

export const getProductFailure = (error) => ({
  type: 'GET_PRODUCT_FAILURE',
  error,
});

export const editProductRequest = () => ({
  type: 'EDIT_PRODUCT_REQUEST',
});

export const editProductSuccess = (editProduct) => ({
  type: 'EDIT_PRODUCT_SUCCESS',
  editProduct,
});

export const editProductFailure = (error) => ({
  type: 'EDIT_PRODUCT_FAILURE',
  error,
});

