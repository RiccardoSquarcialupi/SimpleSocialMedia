import React from "react";

import Home from "../../img/home.png";
import Comment from "../../img/comment.png";

import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} style={{width:"110%"}}alt="" />
      </Link>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
