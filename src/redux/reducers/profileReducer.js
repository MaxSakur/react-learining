import { clientsAPI } from "./../../api";

const SET_PROFILE_INFO_ACTION = "SET_PROFILE_INFO_ACTION";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  profile: null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO_ACTION:
      return { ...state, profile: action.profileData };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setProfileInfoAC = (profileData) => ({
  type: SET_PROFILE_INFO_ACTION,
  profileData,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getProfileInfoThunkCreator = (profileID) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  clientsAPI.getClientById(profileID).then(({ data }) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setProfileInfoAC(data));
  });
};

export default profileReducer;
