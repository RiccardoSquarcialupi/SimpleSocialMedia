import "./Topbar.css";
import { UilSearch } from "@iconscout/react-unicons";
import NavIcons from "../NavIcons/NavIcons";
import Logo from "../../img/logo.png";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src={Logo} className="topbarImg" />
        <span className="logo">SimpleSocialMedia</span>
      </div>
      <div className="topbarCenter">
        <div className="Search">
          <input type="text" placeholder="#Explore" />
          <div className="s-icon">
            <UilSearch />
          </div>
        </div>
      </div>

      <NavIcons />
    </div>
  );
}
