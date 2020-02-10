const GET_PRODUCTS = "GET_PRODUCTS";

let initialState = {
  products: [
    { name: "DC Gloves", size: "S", color: "red" },
    { name: "DC Boots", size: "M", color: "blue" },
    { name: "DC Robe", size: "L", color: "green" },
    {
      name: "DC Helmet",
      size: "XL",
      color: "#fafafa",
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
