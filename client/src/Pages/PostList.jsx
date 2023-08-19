import React, { useState } from 'react';
import Post from '../Components/Post';
import PostDetail from '../Components/PostDetail';

const posts = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post...',
  },
  {
    title: 'Another Blog Post',
    content: 'Here is another interesting blog post...',
  },
  // Add more posts as needed
];

const PostList = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <Post title={post.title} content={post.content} />
          <button onClick={() => handleReadMore(post)}>Read More</button>
        </div>
      ))}
      {selectedPost && <PostDetail title={selectedPost.title} content={selectedPost.content} />}
    </div>
  );
};

export default PostList;
