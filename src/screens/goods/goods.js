import React from "react";
import { Pagination } from "../../components";
import styles from "./goods.module.css";
import { NavLink } from "react-router-dom";

const defaultImagePath = "https://via.placeholder.com/150";

let Clients = (props) => {
  let clients = props.clients || [];

  const changeCurrentPageHandler = (page) => {
    props.changeCurrentPage(page);
    props.getGoodsThunkCreator(page);
  };

  const pagesCount = Math.ceil(props.totalClientsCount / props.pageSize);

  let paginationItem = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationItem.push(i);
  }

  return (
    <div className={styles.container}>
      <Pagination
        data={paginationItem}
        currentPage={props.currentPage}
        onClick={changeCurrentPageHandler}
      />
      {clients.map((u) => (
        <div key={u.id} className={styles.row}>
          <NavLink to={"/profile/" + u.id}>
            <img
              src={u.photos.small || defaultImagePath}
              className={styles.clientImage}
              alt={`${u.id}`}
            />
          </NavLink>

          <p>{u.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Clients;
