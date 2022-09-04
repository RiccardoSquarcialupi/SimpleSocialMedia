import {React, useState} from "react";
import "./ProfileCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

  function logOut(){
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profileRightTop">
      <div className="profileCover">
        <img
          className="profileCoverImg"
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="CoverImage"
        />
        <img
          className="profileUserImg"
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">
          {user.firstname} {user.lastname} &nbsp;&nbsp;
          <EditIcon
            className="editIcon"
            fontSize="small"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
          />
        </h4>
        <a>@{user.username}</a>
        <button className="button fc-button" onClick={() => logOut()}>
          LOGOUT &nbsp;&nbsp;
          <LogoutIcon
            className="navIcons"
            fontSize="small"
            style={{marginBottom:"1px"}}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;