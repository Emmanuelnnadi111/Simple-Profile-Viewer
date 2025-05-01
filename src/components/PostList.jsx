import classes from "./PostList.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData()
  
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body}  />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There is no post yet.</h1>
          <p>Try adding some!</p>
        </div>
      )}
    
    </>
  );
};

export default PostList;
