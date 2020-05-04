import React from "react";
import { connect } from "react-redux";
import Header from "./../components/Header";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.login,
});

let AuthRedirectComponent = withAuthRedirect(HeaderContainer);

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
