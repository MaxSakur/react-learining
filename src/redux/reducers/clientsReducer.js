const GET_CLIENTS = "GET_CLIENTS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";

const initialState = {
  clients: [],
  currentPage: 1,
  pageSize: 12,
  totalClientsCount: 44
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: [...action.clients] };
    case CHANGE_CURRENT_PAGE:
      console.log(action.page);
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
};

export const getClientsAC = (clients) => ({ type: GET_CLIENTS, clients });
export const changeCurrentPageAC = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
});

export default clientsReducer;
