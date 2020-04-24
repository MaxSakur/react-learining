import React from "react";
import { connect } from "react-redux";

import { setAuthUserDataAC } from "./../redux/reducers/authReducer";
import { authApi } from "./../api";

import Header from "./../components/Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi().then(({ data }) => {
      if (data.resultCode === 0) {
        let { userId, login, email } = data.data;
        this.props.setAuthUserData(userId, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthUserData: (userId, login, email) =>
      dispatch(setAuthUserDataAC(userId, login, email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
