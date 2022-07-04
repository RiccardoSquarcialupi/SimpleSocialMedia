import { Modal } from "@mantine/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";

const User = ({ person }) => {
  const [opened, setOpened] = useState(false);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  return (
    <div className="follower">
      <div>
        <span>
          <img
            onClick={() => setOpened(true)}
            src={
              publicFolder + person.profilePicture
                ? publicFolder + person.profilePicture
                : publicFolder + "defaultProfile.png"
            }
            alt="profile"
            className="followerImage"
            style={{ cursor: "pointer" }}
          />
        </span>
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>

      <Modal opened={opened} onClose={() => setOpened(false)} title="Info">
        {
          <div>
            <div className="ProfileCard">
              <div className="ProfileImages">
                <img
                  src={
                    person.coverPicture
                      ? serverPublic + person.coverPicture
                      : serverPublic + "defaultCover.jpg"
                  }
                  style={{ width: "80%" }}
                  alt="CoverImage"
                />
                <img
                  src={
                    person.profilePicture
                      ? serverPublic + person.profilePicture
                      : serverPublic + "defaultProfile.png"
                  }
                  alt="ProfileImage"
                />
              </div>
              <div className="ProfileName">
                <span>
                  {person.firstname} {person.lastname}
                </span>
                <span>
                  {person.worksAt ? person.worksAt : "Write about yourself"}
                </span>
              </div>

              <div className="followStatus">
                <hr />
                <div>
                  <div className="follow">
                    <span>{person.followers.length}</span>
                    <span>Followers</span>
                  </div>
                  <div className="vl"></div>
                  <div className="follow">
                    <span>{person.following.length}</span>
                    <span>Following</span>
                  </div>
                  {/* profileage */}
                  <div className="vl"></div>
                  <div className="follow">
                    <span>
                      {
                        posts.filter((post) => post.userId === person._id)
                          .length
                      }
                    </span>
                    <span>Posts</span>
                  </div>{" "}
                </div>
                <hr />
              </div>
            </div>
            <div>
              <div className="info">
                {/* */}
                <span>
                  <b>Status </b>
                </span>
                <span>{person.relationship}</span>
              </div>
              <div className="info">
                <span>
                  <b>Lives in </b>
                </span>
                <span>{person.livesIn}</span>
              </div>
              <div className="info">
                <span>
                  <b>Works at </b>
                </span>
                <span>{person.worksAt}</span>
              </div>
            </div>
          </div>
        }
      </Modal>
    </div>
  );
};

export default User;
