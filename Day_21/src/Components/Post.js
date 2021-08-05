import React from "react";
import "../Styles/post.css";

function Post({ post }) {

  const handleOndel = () => {
    post.delete();
  }

  const handleOnEdit = () => {
    post.edit();
  }

  const posts = post.map((post, index) => {
    return (
      <div className="box" key={index}>
        <h2 className="title">{post.title}</h2>
        <p className="calories">you have consumed {post.calories} calories</p>
        <button className="delBtn" onClick={handleOndel}>Delete</button>
        <button className="editBtn" onClick={handleOnEdit}>Edit</button>
      </div>
    );
  });

  return <div>{posts}</div>;
}

export default Post;
