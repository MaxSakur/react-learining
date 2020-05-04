import React from "react";
import { connect } from "react-redux";

import { getProfileInfoThunkCreator } from "../redux/reducers/profileReducer";

import SignIn from "../screens/signIn";

class signInContainer extends React.Component {
  render() {
    return <SignIn {...this.props} profile={this.props.profile} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileInfoThunkCreator: (id) =>
      dispatch(getProfileInfoThunkCreator(id)),
  };
};

export default connect(mapDispatchToProps)(signInContainer);
