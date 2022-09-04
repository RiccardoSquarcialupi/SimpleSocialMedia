import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import PostSide from "../../components/PostSide/PostSide";
import Topbar from "../../components/TopBar/Topbar";
import TrendCard from "../../components/TrendCard/TrendCard";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="Profile">
        <TrendCard className="firstTrend" />
        <div className="profileRight">
          <ProfileCard location="profilePage" />
          <div className="profileRightBottom">
            <PostSide />
            <FollowersCard profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
