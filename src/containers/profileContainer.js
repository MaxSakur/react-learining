import React from "react";
import { connect } from "react-redux";
import { toggleIsFetchingAC } from "./../redux/reducers/clientsReducer";
import { setProfileInfoAC } from "./../redux/reducers/profileReducer";

import * as axios from "axios";

import Profile from "./../screens/profile";
import Preloader from "../components/Preloader/preloader";
import { withRouter } from "react-router-dom";

class profileContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    let userId = this.props.match.params.profileID || 2;
    console.log("all props", this.props);
    console.log("user ID", this.props.match.params.profileID);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setProfileInfo(response.data);
      });
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
  };
};

const containerWithURL = withRouter(profileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(containerWithURL);
