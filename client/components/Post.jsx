import React from "react";

const Post = (props) => {
  return (
    <div>
      <div id="Post">
        <div id="post-username">{props.username}</div>
        <br />
        <label id="questionlabel">Question: </label>
        <div id="post-question">{props.question}</div>
        <br />
        <label id="answerlabel">Answer: </label>
        <div id="post-content">{props.content}</div>
        <br />
        <label id="categorylabel">Category: </label>
        <div id="post-categories">{props.categories}</div>
        <br />
        <div id="post-resolved">{props.resolve}</div>
        <label id="postedlabel">Posted: </label>
        <div id="post-date">{props.date}</div>
      </div>
    </div>
  );
};
export default Post;
