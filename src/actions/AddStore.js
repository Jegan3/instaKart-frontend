export const getAddStore = () => ({
  type: 'ADD_STORE_REQUEST',
});

export const getAddStoreSuccess = (addStore) => ({
  type: 'ADD_STORE_SUCCESS',
  addStore,
});

export const getAddStoreFailure = (error) => ({
  type: 'ADD_STORE_FAILURE',
  error,
});
