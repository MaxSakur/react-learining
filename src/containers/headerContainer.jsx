import React from "react";
import { connect } from "react-redux";
import { authThunkCreator } from "./../redux/reducers/authReducer";

import Header from "./../components/Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth();
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
    auth: () => dispatch(authThunkCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
