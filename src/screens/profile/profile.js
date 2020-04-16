import React from "react";
import Preloader from "../../components/Preloader/preloader";

const Profile = ({ profile }) => {
  console.log("profile", profile);

  if (!profile) {
    return <Preloader />;
  }

  const name = profile.aboutMe || "No name";
  const image =
    profile.photos.large ||
    "https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg";

  return (
    <div>
      <img src={image} alt={"profile"} />
      <p>{name}</p>
    </div>
  );
};
export default Profile;
