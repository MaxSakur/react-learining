import React from "react";
import { connect } from "react-redux";
import {
  getClientsAC,
  changeCurrentPageAC,
  setTotalCountAC,
  toggleIsFetchingAC
} from "./../redux/reducers/clientsReducer";

import * as axios from "axios";

import Clients from "./../screens/clients";
import Preloader from "../components/Preloader/preloader";

class CliensContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.getClients(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    const dataFromBack = pageNumber => {
      this.props.toggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.getClients(response.data.items);
        });
    };

    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Clients
            clients={this.props.clients}
            totalClientsCount={this.props.totalClientsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.props.changeCurrentPage}
            dataFromBack={dataFromBack}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clientsPage.clients,
    currentPage: state.clientsPage.currentPage,
    pageSize: state.clientsPage.pageSize,
    totalClientsCount: state.clientsPage.totalClientsCount,
    isFetching: state.clientsPage.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClients: clients => dispatch(getClientsAC(clients)),
    changeCurrentPage: page => dispatch(changeCurrentPageAC(page)),
    setTotalCount: count => dispatch(setTotalCountAC(count)),
    toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CliensContainer);
