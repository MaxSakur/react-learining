const GET_PRODUCTS = "GET_PRODUCTS";

let initialState = {
  products: [
    { name: "DC Gloves", price: 30, type: "gloves" },
    { name: "DC Boots", price: 20, type: "boots" },
    { name: "DC Robe", price: 50, type: "robe" },
    {
      name: "DC Helmet",
      price: 100,
      type: "helmet",
      url: "https://calcuworld.com/wp-content/uploads/2016/04/Excel.png"
    }
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
