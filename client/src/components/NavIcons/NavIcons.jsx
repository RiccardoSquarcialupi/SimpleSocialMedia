import React from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";

const NavIcons = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="navIcons">
      <Link to="../home">
        <HomeIcon fontSize="large" />
      </Link>
      <Link to={`/profile/${user._id}`}>
        <PersonIcon fontSize="large" />
      </Link>
      <Link to="../chat">
        <SendIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default NavIcons;
