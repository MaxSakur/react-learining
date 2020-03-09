import React from "react";
import * as axios from "axios";
import Clients from "./../screens/clients";

class CliensContainerService extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        console.log(response);
        this.props.getClients(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  dataFromBack = (pageNumber) =>
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.getClients(response.data.items);
      });

  render() {
    return <Clients />;
  }
}

export default CliensContainerService;
