import React from "react";
import { connect } from "react-redux";

import { getProfileInfoThunkCreator } from "../redux/reducers/profileReducer";

import Profile from "../screens/profile";
import Preloader from "../components/Preloader/preloader";
import { withRouter } from "react-router-dom";

class profileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.profileID || 2;
    this.props.getProfileInfoThunkCreator(userId);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileInfoThunkCreator: (id) =>
      dispatch(getProfileInfoThunkCreator(id)),
  };
};

const containerWithURL = withRouter(profileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(containerWithURL);
