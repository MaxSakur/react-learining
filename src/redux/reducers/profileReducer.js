const SET_PROFILE_INFO_ACTION = "SET_PROFILE_INFO_ACTION";

const initialState = {
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO_ACTION:
      return { ...state, profile: action.profileData };
    default:
      return state;
  }
};

export const setProfileInfoAC = (profileData) => ({
  type: SET_PROFILE_INFO_ACTION,
  profileData,
});

export default profileReducer;
