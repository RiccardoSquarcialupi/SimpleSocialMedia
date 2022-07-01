import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home">
        <img src={Logo} style={{ width: "75%" }} alt="" />
      </Link>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
