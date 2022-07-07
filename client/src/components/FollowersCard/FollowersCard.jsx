import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { getAllUser } from "../../redux/api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
const FollowersCard = ({ profile }) => {
  const [persons, setPersons] = useState([]);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  const NormalFollowersBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">People you may know:</h4>
        <ul className="rigthbarFriendList">
          {persons.map((person, id) => {
            if (person._id !== user._id)
              return (
                <li className="rightbarFriend">
                  <User person={person} key={id} />
                </li>
              );
          })}
        </ul>
      </>
    );
  };

  const ProfileFollowersBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Lives in:</span>
            <span className="rightbarInfoValue">
              {user.livesin ? user.livesin : "Not known"}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Works at:</span>
            <span className="rightbarInfoValue">
              {user.worksAt ? user.worksAt : "Not known"}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship ? user.relationship : "Not known"}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Followers:</span>
            <span className="rightbarInfoValue">{user.followers.length}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Following:</span>
            <span className="rightbarInfoValue">{user.following.length}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Number of Post:</span>
            <span className="rightbarInfoValue">
              {posts.filter((post) => post.userId === user._id).length}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {persons.map((person, id) => {
            if (person._id !== user._id)
              return (
                <div className="rightbarFollowing">
                  <User
                    person={person}
                    key={id}
                    className="rightbarFollowingImg"
                  />
                </div>
              );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileFollowersBar /> : <NormalFollowersBar />}
      </div>
    </div>
  );
};
export default FollowersCard;
