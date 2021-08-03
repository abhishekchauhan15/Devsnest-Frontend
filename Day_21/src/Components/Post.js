import React, { useState } from "react";

function Post({ post }) {

  const posts=post.map((post, index) => {
    return (
      <div key={index}>
        <h2>{post.title}</h2>
        <p>{post.calories}</p>
      </div>
    );
  })

  return (
    <div>
      {posts}
    </div>
  );
}

export default Post;
