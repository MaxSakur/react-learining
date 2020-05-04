import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authThunkCreator } from "./../redux/reducers/authReducer";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    componentDidMount() {
      this.props.auth();
    }

    render() {
      if (!this.props.auth) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...this.props} />;
      }
    }
  }

  let mapStateToPropsForRedirect = (state) => ({
    auth: state.auth.isAuth,
  });

  const mapDispatchToPropsForRedirect = (dispatch) => {
    return {
      auth: () => dispatch(authThunkCreator()),
    };
  };

  let ConnectedAuthRedirectComponent = connect(
    mapStateToPropsForRedirect,
    mapDispatchToPropsForRedirect
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
