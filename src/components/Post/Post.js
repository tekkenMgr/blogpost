import React from "react";
import "./Post.css";

const post = props => {
  let post;
  post = (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
  return post;
};

export default post;
