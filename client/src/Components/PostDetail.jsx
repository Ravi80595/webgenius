import React from 'react';

const PostDetail = ({ title, content }) => {
  return (
    <div className="post-detail">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostDetail;
