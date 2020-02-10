import React from "react";
import ShopPage from "./../screens/shopPage";
import StoreContext from "../StoreContext";

const shopPageContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let products = state.productsStoreReducer.products;
        return <ShopPage products={products} />;
      }}
    </StoreContext.Consumer>
  );
};

export default shopPageContainer;
