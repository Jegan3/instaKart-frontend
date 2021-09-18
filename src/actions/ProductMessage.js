export const getProductMessage = () => ({
  type: 'PRODUCT_MESSAGE_REQUEST',
});

export const getProductMessageSuccess = (productMessage) => ({
  type: 'PRODUCT_MESSAGE_SUCCESS',
  productMessage,
});

export const getProductMessageFailure = (error) => ({
  type: 'PRODUCT_MESSAGE_FAILURE',
  error,
});
