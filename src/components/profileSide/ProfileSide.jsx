import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import FollowersCard from "../FollowersCard/FollowersCard";

import "./ProfileSide.css";

export default function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
}
