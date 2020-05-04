import React from "react";
import { connect } from "react-redux";

import { getProfileInfoThunkCreator } from "../redux/reducers/profileReducer";

import SignIn from "../screens/signIn";
import Login from "../components/Login";

class signInContainer extends React.Component {
  render() {
    return (
      <>
        {!this.props.isAuth ? (
          <Login />
        ) : (
          <SignIn {...this.props} profile={this.props.profile} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileInfoThunkCreator: (id) =>
      dispatch(getProfileInfoThunkCreator(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signInContainer);
