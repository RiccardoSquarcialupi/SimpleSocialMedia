import React from "react";
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import PostSide from "../../components/PostSide/PostSide";
import Topbar from "../../components/TopBar/Topbar";
import TrendCard from "../../components/TrendCard/TrendCard";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Topbar />
      <div className="Home">
        <TrendCard className="firstTrend" />
        <PostSide />
        <FollowersCard />
      </div>
    </>
  );
};

export default Home;
