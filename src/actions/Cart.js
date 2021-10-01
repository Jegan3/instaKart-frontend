export const getCart = () => ({
  type: 'CART_REQUEST',
});

export const getCartSuccess = (cart) => ({
  type: 'CART_SUCCESS',
  cart,
});

export const getCartFailure = (error) => ({
  type: 'CART_FAILURE',
  error,
});
