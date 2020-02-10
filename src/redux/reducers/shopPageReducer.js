const GET_PRODUCTS = "GET_PRODUCTS";

let initialState = {
  products: [
    { name: "T-Short", size: "S", color: "red" },
    { name: "T-Short", size: "M", color: "blue" },
    { name: "T-Short", size: "L", color: "green" },
    { name: "T-Short", size: "XL", color: "black" }
  ]
};

export const productsStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export const getAllProductsCreator = (products) => ({
  type: GET_PRODUCTS,
  payload: { products }
});
