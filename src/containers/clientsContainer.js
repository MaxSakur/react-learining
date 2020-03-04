// import React from "react";
import Clients from "../screens/clients";
import { connect } from "react-redux";
import { getClientsAC } from "./../redux/reducers/clientsReducer";

const mapStateToProps = state => {
  return {
    clients: state.clientsPage.clients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClients: clients => dispatch(getClientsAC(clients))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
