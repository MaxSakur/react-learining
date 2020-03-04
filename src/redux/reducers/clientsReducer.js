const GET_CLIENTS = "GET_CLIENTS";

const initialState = {
  clients: [
    { id: 0, name: "Rule", gender: male },
    { id: 1, name: "Sam", gender: male },
    { id: 2, name: "Kate", gender: female }
  ]
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      console.log("clients", state.clients);
      return { ...state, clients: [...state.clients, ...action.clients] };
    default:
      return state;
  }
};

export const getClientsAC = clients => ({ type: GET_CLIENTS, clients });

export default clientsReducer;
