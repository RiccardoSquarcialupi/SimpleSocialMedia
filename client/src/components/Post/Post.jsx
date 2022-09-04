import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import { getTimelinePosts } from "../../redux/actions/PostsAction";
import NotLike from "../../img/notlike.png";
import { likePost, deletePost } from "../../redux/api/PostsRequests";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Post = ({ data }) => {
  const server = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleDelete = () => {
    deletePost(data._id, user._id);
    setTimeout(() => {
      dispatch(getTimelinePosts(user._id));
    }, 50);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                user.profilePicture
                  ? server + user.profilePicture
                  : server + "defaultProfile.png"
              }
              alt=""
            />
            <span className="postUsername">@{data.username}</span>
            <a className="postDate">
              {data.createdAt.slice(0, 10)}&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <div></div>
            <a className="postDate">{data.createdAt.slice(11, 16)}</a>
          </div>
          <div className="postTopRight">
            {data.username === user.username ? (
              <DeleteForeverIcon
                fontSize="large"
                style={{ color: "red", cursor: "pointer" }}
                onClick={handleDelete}
              />
            ) : null}
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
};

export default Post;
