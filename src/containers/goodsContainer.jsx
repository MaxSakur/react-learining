import React from "react";
import { connect } from "react-redux";
import {
  getClientsAC,
  changeCurrentPageAC,
  setTotalCountAC,
  toggleIsFetchingAC,
  getGoodsThunkCreator,
} from "../redux/reducers/goodsReducer";

import Goods from "../screens/goods";
import Preloader from "../components/Preloader/preloader";

class GoodsContainer extends React.Component {
  componentDidMount() {
    this.props.getGoodsThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Goods
            clients={this.props.clients}
            totalClientsCount={this.props.totalClientsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.props.changeCurrentPage}
            dataFromBack={this.props.clients}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.goodsReducer.clients,
    currentPage: state.goodsReducer.currentPage,
    pageSize: state.goodsReducer.pageSize,
    totalClientsCount: state.goodsReducer.totalClientsCount,
    isFetching: state.goodsReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClients: (clients) => dispatch(getClientsAC(clients)),
    changeCurrentPage: (page) => dispatch(changeCurrentPageAC(page)),
    setTotalCount: (count) => dispatch(setTotalCountAC(count)),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
    getGoodsThunkCreator: () => dispatch(getGoodsThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer);
