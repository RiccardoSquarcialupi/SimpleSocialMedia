import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

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
            {user.firstname} {user.lastname}
          </h4>
        </div>
      </div>
  );
};

export default ProfileCard;
