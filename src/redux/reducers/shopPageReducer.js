const GET_PRODUCTS = "GET_PRODUCTS";

let initialState = {
  products: [
    {
      name: "DC Gloves",
      price: 30,
      type: "gloves",
      url:
        "https://cdn11.bigcommerce.com/s-xb1mui9im7/images/stencil/1280x1280/products/112/382/waterproof-field-gloves-1__41191.1544285552.jpg?c=2&imbypass=on"
    },
    {
      name: "DC Boots",
      price: 20,
      type: "boots",
      url: "https://www.softmoc.com/Items/images/TB08658A001_XX4.jpg"
    },
    {
      name: "DC Robe",
      price: 50,
      type: "robe",
      url:
        "https://cdn.shopify.com/s/files/1/0660/0091/products/BC_May19_114.jpg?v=1558379888"
    },
    {
      name: "DC Helmet",
      price: 100,
      type: "helmet",
      url:
        "https://toy-content.imgix.net/product/micro-scooter-led-helmet-3d-scootersaurus-small-1~1545346623.jpg?w=710&h=710&fit=fill&fm=jpg&bg=0FFF&s=b4a26d88ead015732d1d91c9d0152122"
    },
    {
      name: "DC Gloves",
      price: 30,
      type: "gloves",
      url:
        "https://cdn11.bigcommerce.com/s-xb1mui9im7/images/stencil/1280x1280/products/112/382/waterproof-field-gloves-1__41191.1544285552.jpg?c=2&imbypass=on"
    },
    {
      name: "DC Boots",
      price: 20,
      type: "boots",
      url: "https://www.softmoc.com/Items/images/TB08658A001_XX4.jpg"
    },
    {
      name: "DC Robe",
      price: 50,
      type: "robe",
      url:
        "https://cdn.shopify.com/s/files/1/0660/0091/products/BC_May19_114.jpg?v=1558379888"
    },
    {
      name: "DC Helmet",
      price: 100,
      type: "helmet",
      url:
        "https://toy-content.imgix.net/product/micro-scooter-led-helmet-3d-scootersaurus-small-1~1545346623.jpg?w=710&h=710&fit=fill&fm=jpg&bg=0FFF&s=b4a26d88ead015732d1d91c9d0152122"
    }
  ]
};

export const productsStoreReducer = (state = initialState, action) => {
  // let stateCopy = { ...state, products: [...state.products] };

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
