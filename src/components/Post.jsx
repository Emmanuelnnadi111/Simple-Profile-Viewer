import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
const Post = ({ id, author, body }) => {
  // const choseName = Math.random() > 0.5 ? names[0] :  names[1]
  return (
    <li className={classes.post}>
      <Link to={id}>
        <h1 className={classes.author}>{author}</h1>
        <h1 className={classes.text}>{body}</h1>
      </Link>
    </li>
  );
};

export default Post;
