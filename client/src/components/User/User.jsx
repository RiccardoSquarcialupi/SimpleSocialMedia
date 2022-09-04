import { Modal } from "@mantine/core";
import ChatIcon from "@mui/icons-material/Chat";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";
import { createChat, userChats } from "../../redux/api/ChatRequests";

const User = ({ person }) => {
  const [opened, setOpened] = useState(false);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  const button = (
    <div style={{ textAlign: "center" }}>
      <b>SEND A MESSAGE:</b>
      <div>
        <ChatIcon
          fontSize="large"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => createNewChatHandler()}
        />
      </div>
    </div>
  );
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  async function showChatButtonHandler(person){
    console.log("questo è l'handle di " + person.username);
    userChats(user._id).then((res) => {
      console.log("sono dentro la prima funzione");
      let findChat = false;
      if (res.data.length > 0) {
        console.log("data.length maggiore di zero");
        res.data.map((chat) => {
          console.log("map di chat:" + chat._id);
          console.log("receiverId:" + chat.members[0]);
          console.log("senderId:" + chat.members[1]);
          console.log("personId:" + person._id)
          console.log(chat)
          if (
            (chat.members[0] === person._id || chat.members[1] === person._id) && !findChat) {
            findChat = true;
            console.log("la chat con la persona esiste già"); 
            return (!findChat);
          }
        });
        if (!findChat) {
          console.log("findChat è falso creo bottone");
          return !findChat;
        }
      } else {
        console.log("non ci sono chat\n creo la chat senza controlli");
        findChat = true;
        return !findChat;
      }
    });
  };

  function createNewChatHandler(){
    if (person._id !== user._id) {
      console.log("creating new chat");
      createChat({ senderId: user._id, receiverId: person._id });
    }
  };

  return (
    <div className="rightbarProfileImgContainer">
      <div>
        <span>
          <img
            onClick={() => setOpened(true)}
            src={
              person.profilePicture
                ? publicFolder + person.profilePicture
                : publicFolder + "defaultProfile.png"
            }
            alt="profile"
            className="rightbarProfileImg"
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
              <img
                src={
                  person.profilePicture
                    ? publicFolder + person.profilePicture
                    : publicFolder + "defaultProfile.png"
                }
                style={{ width: "50%", marginLeft: "25%" }}
                alt="ProfileImage"
              />
              <div className="ProfileName">
                <span>
                  {person.firstname}&nbsp;{person.lastname} &nbsp;&nbsp;
                </span>
              </div>

              <div className="followStatus">
                <hr />
                <div>
                  <div className="follow">
                    <span>{person.followers.length}&nbsp;</span>
                    <span>Followers</span>
                  </div>
                  <div className="vl"></div>
                  <div className="follow">
                    <span>{person.following.length}&nbsp;</span>
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
                    <span>&nbsp;Posts</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div>
              <div className="info">
                {/* */ }
                <span>
                  <b>Status:&nbsp;</b>
                </span>
                {person.relationship
                  ? person.relationship
                  : "No Relationship known"}
              </div>
              <div className="info">
                <span>
                  <b>Lives in:&nbsp;</b>
                </span>
                {person.livesIn ? person.livesIn : "No HomeTown"}
              </div>
              <div className="info">
                <span>
                  <b>Works at:&nbsp;</b>
                </span>
                {person.worksAt ? person.worksAt : "No Workplace"}
              </div>  
              {showChatButtonHandler(person) ? button : ""}
            </div>
          </div>
        }
      </Modal>
    </div>
  );
};

export default User;
