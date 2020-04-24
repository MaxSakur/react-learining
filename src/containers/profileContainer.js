import React from "react";
import { connect } from "react-redux";
import { toggleIsFetchingAC } from "./../redux/reducers/goodsReducer";
import { setProfileInfoAC } from "./../redux/reducers/profileReducer";

import getProfileInfoThunkCreator from "./../redux/reducers/profileReducer";

import Profile from "./../screens/profile";
import Preloader from "../components/Preloader/preloader";
import { withRouter } from "react-router-dom";

class profileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileInfoThunkCreator(this.props.match.params.profileID);
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
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
    setProfileInfo: (data) => dispatch(setProfileInfoAC(data)),
    getProfileInfoThunkCreator: () => dispatch(getProfileInfoThunkCreator()),
  };
};

const containerWithURL = withRouter(profileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(containerWithURL);
