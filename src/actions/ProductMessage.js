export const getProductMessage = () => ({
  type: 'PRODUCT_MESSAGE_REQUEST',
});

export const getProductMessageSuccess = (productMessage) => ({
  type: 'PRODUCT_MESSAGE_REQUEST',
  productMessage,
});

export const getProductMessageFailure = (error) => ({
  type: 'PRODUCT_MESSAGE_REQUEST',
  error,
});
