import React from "react";
import { connect } from "react-redux";
import {
  changeCurrentPageAC,
  setTotalCountAC,
  getGoodsThunkCreator,
} from "../redux/reducers/goodsReducer";

import Goods from "../screens/goods";
import Preloader from "../components/Preloader/preloader";
import { withAuthRedirect } from "./../hoc/withAuthRedirect";

const Content = ({ props }) => {
  return props.isFetching ? <Preloader /> : <Goods {...props} />;
};

class GoodsContainer extends React.Component {
  componentDidMount() {
    this.props.getGoodsThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  render() {
    return <Content props={this.props} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(GoodsContainer);

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
    changeCurrentPage: (page) => dispatch(changeCurrentPageAC(page)),
    setTotalCount: (count) => dispatch(setTotalCountAC(count)),
    getGoodsThunkCreator: (page, size) =>
      dispatch(getGoodsThunkCreator(page, size)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
