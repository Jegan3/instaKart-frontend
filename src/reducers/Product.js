const initialState = {};

export const addProductState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_REQUEST':
      return {
        ...state,
        isLoading: true,
        thriftAddProduct: false,
        error: false,
      };
    case 'ADD_PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        addProduct: action.addProduct,
      };
    case 'ADD_PRODUCT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getProductState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        product: action.product,
      };
    case 'GET_PRODUCT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const editProductState = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PRODUCT_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'EDIT_PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        editProduct: action.editProduct,
      };
    case 'EDIT_PRODUCT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
