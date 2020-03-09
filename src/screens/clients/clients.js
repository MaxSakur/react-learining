import React from "react";
import { Pagination } from "./../../components";
import styles from "./clients.module.css";

const defaultImagePath = "https://via.placeholder.com/150";

let Clients = (props) => {
  let clients = props.clients || [];

  const changeCurrentPageHandler = (page) => {
    props.changeCurrentPage(page);
    props.dataFromBack(page);
  };

  const pagesCount = Math.ceil(props.totalClientsCount / props.pageSize);

  let paginationItem = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationItem.push(i);
  }
  console.log(props);
  return (
    <div className={styles.container}>
      <Pagination
        data={paginationItem}
        currentPage={props.currentPage}
        onClick={changeCurrentPageHandler}
      />
      {clients.map((u) => (
        <div key={u.id} className={styles.row}>
          <img
            src={u.photos.small || defaultImagePath}
            className={styles.clientImage}
            alt={`${u.id}`}
          />
          <p>{u.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Clients;
