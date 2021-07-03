export const getThriftCategory = () => ({
  type: 'THRIFT_CATEGORY_REQUEST',
});

export const getThriftCategorySuccess = (thriftCategory) => ({
  type: 'THRIFT_CATEGORY_SUCCESS',
  thriftCategory,
});

export const getThriftCategoryFailure = (error) => ({
  type: 'THRIFT_CATEGORY_FAILURE',
  error,
});
