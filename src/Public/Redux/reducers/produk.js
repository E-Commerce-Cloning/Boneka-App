const initialState = {
  produkList: [],
  produkNew: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const produk = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PRODUK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_PRODUK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        produkList: action.payload.data.response
      };

    case "GET_NEW_PRODUK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_NEW_PRODUK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };

    case "GET_NEW_PRODUK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        produkNew: action.payload.data.response
      };

    default:
      return state;
  }
};

export default produk;
