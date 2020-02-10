import React from "react";
import { getAllProductsCreator } from "./../redux/reducers/shopPageReducer";
import ShopPage from "./../screens/shopPage";
import StoreContext from "../StoreContext";

const shopPageContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let action = store.dispatch(getAllProductsCreator());
        let products = store.dispatch(action);
        console.log("state", state);
        console.log("products", products);
        return <ShopPage products={state.productsStoreReducer.products} />;
      }}
    </StoreContext.Consumer>
  );
};

export default shopPageContainer;
