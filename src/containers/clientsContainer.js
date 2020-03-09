import { connect } from "react-redux";
import {
  getClientsAC,
  changeCurrentPageAC,
  setTotalCountAC
} from "./../redux/reducers/clientsReducer";
import CliensContainerService from "../services/clientsConteinerService";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CliensContainerService);
