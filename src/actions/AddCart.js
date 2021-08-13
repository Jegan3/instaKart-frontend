export const getAddCart = () => ({
  type: 'ADD_CART_REQUEST',
});

export const getAddCartSuccess = (addCart) => ({
  type: 'ADD_CART_SUCCESS',
  addCart,
});

export const getAddCartFailure = (error) => ({
  type: 'ADD_CART_FAILURE',
  error,
});
