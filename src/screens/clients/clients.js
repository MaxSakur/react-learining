import React from "react";
import { Pagination } from "./../../components";
import * as axios from "axios";
import "./index.css";

class UsersListPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.getClients(response.data.items);
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
    let clients = this.props.clients;

    const changeCurrentPageHandler = (page) => {
      this.props.changeCurrentPage(page);
      this.dataFromBack(page);
    };

    const pagesCount = Math.ceil(
      this.props.totalClientsCount / this.props.pageSize
    );

    let paginationItem = [];

    for (let i = 1; i <= pagesCount; i++) {
      paginationItem.push(i);
    }

    return (
      <div>
        <Pagination
          data={paginationItem}
          currentPage={this.props.currentPage}
          onClick={changeCurrentPageHandler}
        />
        {clients.map((u) => (
          <div key={u.id} className="container">
            <p>{u.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersListPage;
