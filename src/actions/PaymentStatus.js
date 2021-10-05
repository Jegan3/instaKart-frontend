export const getPaymentStatus = () => ({
  type: 'PAYMENT_STATUS_REQUEST',
});

export const getPaymentStatusSuccess = (paymentStatus) => ({
  type: 'PAYMENT_STATUS_SUCCESS',
  paymentStatus,
});

export const getPaymentStatusFailure = (error) => ({
  type: 'PAYMENT_STATUS_FAILURE',
  error,
});
