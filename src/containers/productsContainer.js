// import React from "react";
import Products from "../screens/products";
import { connect } from "react-redux";
import { getAllProductsCreator } from "../redux/reducers/productsReducer";

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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
