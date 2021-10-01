export const getCheckout = () => ({
  type: 'CHECKOUT_REQUEST',
});

export const getCheckoutSuccess = (checkout) => ({
  type: 'CHECKOUT_SUCCESS',
  checkout,
});

export const getCheckoutFailure = (error) => ({
  type: 'CHECKOUT_FAILURE',
  error,
});
