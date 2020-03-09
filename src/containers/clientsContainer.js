import React from "react";
import { connect } from "react-redux";
import {
  getClientsAC,
  changeCurrentPageAC,
  setTotalCountAC
} from "./../redux/reducers/clientsReducer";

import * as axios from "axios";
import Clients from "./../screens/clients";

class CliensContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.getClients(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    const dataFromBack = (pageNumber) =>
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.getClients(response.data.items);
        });

    return (
      <Clients
        clients={this.props.clients}
        totalClientsCount={this.props.totalClientsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        changeCurrentPage={this.props.changeCurrentPage}
        dataFromBack={dataFromBack}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clientsPage.clients,
    currentPage: state.clientsPage.currentPage,
    pageSize: state.clientsPage.pageSize,
    totalClientsCount: state.clientsPage.totalClientsCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClients: (clients) => dispatch(getClientsAC(clients)),
    changeCurrentPage: (page) => dispatch(changeCurrentPageAC(page)),
    setTotalCount: (count) => dispatch(setTotalCountAC(count))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CliensContainer);
