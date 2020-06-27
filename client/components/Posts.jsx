import React, { Component } from "react";
import Post from "./Post.jsx";

const Posts = (props) => {
  return (
    <div>
      <h1 id="posts-head">Posts</h1>
      <div id="post-container">
        {props.posts.map((post) => {
          return (
            <Post
              username={post.username_id}
              question={post.question}
              content={post.content}
              categories={post.categories_id}
              resolved={post.resolved}
              date={post.date_created}
              key={post.post_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
