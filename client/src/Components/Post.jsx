import React from 'react';

const Post = ({ title, content }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Post;
