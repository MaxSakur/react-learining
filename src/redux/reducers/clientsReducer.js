const GET_CLIENTS = "GET_CLIENTS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  clients: [],
  currentPage: 1,
  pageSize: 12,
  totalClientsCount: 0
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...action.clients] };
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_COUNT:
      return { ...state, totalClientsCount: action.count };
    default:
      return state;
  }
};

export const getClientsAC = (clients) => ({ type: GET_CLIENTS, clients });
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, count });
export const changeCurrentPageAC = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
});

export default clientsReducer;
