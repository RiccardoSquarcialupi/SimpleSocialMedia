import { Grid } from "@mui/material";
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
        <TrendCard />
        <PostSide />
        <FollowersCard />
      </div>
    </>
  );
};

export default Home;
