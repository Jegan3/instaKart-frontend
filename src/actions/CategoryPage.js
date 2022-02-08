export const getCategoryPage = () => ({
  type: 'CATEGORY_PAGE_REQUEST',
});

export const getCategoryPageSuccess = (categoryPage) => ({
  type: 'CATEGORY_PAGE_SUCCESS',
  categoryPage,
});

export const getCategoryPageFailure = (error) => ({
  type: 'CATEGORY_PAGE_FAILURE',
  error,
});
