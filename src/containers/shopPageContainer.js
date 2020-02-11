// import React from "react";
import ShopPage from "./../screens/shopPage";
import { connect } from "react-redux";
import { getAllProductsCreator } from "./../redux/reducers/shopPageReducer";

const mapStateToProps = state => {
  return {
    products: state.productsStoreReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getAllProductsCreator())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
