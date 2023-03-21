import React, { useState, useRef } from "react";
// import PropTypes from "prop-types";
import "./App.css";

function Comment({ username, time, comm }) {
  const [like, setLike] = useState(94);
  const [dislike, setDislike] = useState(9);

  const discard = useRef();

  const [overlay, setOverlay] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const [reply, setReply] = useState(null);

  function replyModal() {
    setOverlay(!overlay);
    setOpenReply(!openReply);
  }

  function removeModal() {
    setOpenReply(false);
    setOverlay(false);
  }

  function discardReply() {
    if (discard.current.value === "") {
      alert("Nothing to clear!");
    } else {
      discard.current.value = "";
    }
  }

  function replyComment() {
    if (discard.current.value === null || discard.current.value === "") {
      alert("Please input something");
      return openReply;
    } else {
      setOpenReply(false);
      setOverlay(false);
    }
  }

  const updateLike = () => {
    setLike((like) => like + 1);
  };
  const updateDislike = () => {
    setDislike((dislike) => dislike + 1);
  };
  return (
    <>
      <div className="comment-box">
        <h1>{username}</h1>
        <p id="time">{time}</p>
        <p id="comment">{comm}</p>
        {overlay ? <div className="overlay"></div> : ""}
        <div className="social-network">
          <div className="buttons">
            <button id="like" onClick={updateLike}>
              {like}👍
            </button>
            <button id="dislike" onClick={updateDislike}>
              {dislike}👎
            </button>
          </div>
          <button className="reply" onClick={replyModal}>
            🔂
          </button>
          {openReply ? (
            <div className="reply-content">
              <button id="close" onClick={removeModal}>
                X
              </button>
              <h2>
                Replying <span>{username}</span>
              </h2>
              <input
                type="text"
                placeholder="Reply"
                value={reply}
                ref={discard}
              />
              <div className="options">
                <button id="discard" onClick={discardReply}>
                  Discard
                </button>
                <button id="reply" onClick={replyComment}>
                  Reply
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Comment;

Comment.defaultProps = {
  username: "Jane Doe",
  time: "2 hours ago",
  comm: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolores, rerum at cupiditate qui veritatis quae animi quia laudantium in.",
};
