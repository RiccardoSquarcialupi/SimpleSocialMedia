import React, { useState, useEffect } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../redux/api/PostsRequests";
import { useSelector } from "react-redux";
import { MoreVert } from "@material-ui/icons";
import * as UserApi from "../../redux/api/UserRequests.js";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [userOfPost, setPostUser] = useState({});

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  useEffect(() => {
    const setUser = async () => {
      const profileUser = await UserApi.getUser(data.userId);
      console.log(profileUser);
      setPostUser(profileUser);

    };
    setUser();
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {userOfPost.profilePicture ?
              (<img
                className="postProfileImg"
                src={
                  userOfPost.profilePicture
                    ? process.env.REACT_APP_PUBLIC_FOLDER +
                      userOfPost.profilePicture
                    : ""
                }
                alt=""
              />) :""
            }
            <span className="postUsername">{userOfPost.username}</span>
            <a className="postDate">
              {data.createdAt.slice(0, 10)}&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <div></div>
            <a className="postDate">{data.createdAt.slice(11, 16)}</a>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{data.desc}</span>
          <img
            className="postImg"
            src={
              data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
            }
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={liked ? Heart : NotLike}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={handleLike}
            />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
            <span>{likes} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
  /*return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="Post-caption">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
    </div>
  );*/
};

export default Post;
