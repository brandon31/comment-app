import React, { useState } from "react";
import "./App.css";
import Comment from "./Comment";

function App() {
  const [addcomment, setAddComment] = useState([]);
  const [comment, setComment] = useState();

  const id = Math.floor(Math.random() * 10 + 1);

  const addComment = () => {
    setAddComment([
      ...addcomment,
      { name: `User ${id}`, time: "Just now", comm: comment },
    ]);
  };

  return (
    <>
      <div className="container">
        <h1 id="title">Comment Box</h1>
        <Comment />
        <Comment
          username={"Brandon"}
          time={"Just now"}
          comm={"This is a test comment from react."}
        />
        {addcomment.map((add) => {
          return (
            <Comment username={add.name} time={add.time} comm={add.comm} />
          );
        })}
        <div className="add-comment">
          <input
            type="text"
            placeholder="Add comment"
            id="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button id="add-comment" onClick={addComment}>
            Comment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
