const GET_PRODUCTS = "GET_PRODUCTS";

let initialState = {
  products: [
    { name: "Gloves", size: "S", color: "red" },
    { name: "Boots", size: "M", color: "blue" },
    { name: "Robe", size: "L", color: "green" },
    { name: "Helmet", size: "XL", color: "#fafafa" }
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

export const getAllProductsCreator = products => ({
  type: GET_PRODUCTS,
  payload: { products }
});
