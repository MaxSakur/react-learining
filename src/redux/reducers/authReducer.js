import { authApi } from "./../../api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});

export const authThunkCreator = () => (dispatch) => {
  return authApi().then(({ data }) => {
    if (data.resultCode === 0) {
      let { userId, login, email } = data.data;
      dispatch(setAuthUserDataAC(userId, login, email));
    }
  });
};

export default clientsReducer;
