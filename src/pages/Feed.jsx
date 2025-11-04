
// src/pages/Feed.jsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Post from '../components/post/Post';
import PostInput from '../components/post/PostInput';
import Avatar from '../assets/Ava.png';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Unused',
      avatar: Avatar,
      timeAgo: '15 min ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    },
    {
      id: 2,
      username: 'Unused',
      avatar: Avatar,
      timeAgo: '32 min ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    },
    {
      id: 3,
      username: 'Unused',
      avatar: Avatar,
      timeAgo: '45 min ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    },
    {
      id: 4,
      username: 'Unused',
      avatar: Avatar,
      timeAgo: '1 hour ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    }
  ]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: 'You',
      avatar: Avatar,
      timeAgo: 'Just now',
      content
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className='py-8 px-4 pb-4 md:px-8 max-w-6xl mx-auto bg-white mb-8'>
      {/* <Header /> */}
      
      <PostInput   
        avatar={Avatar} // Replace with your actual Avatar 
        onCreatePost={handleCreatePost} 
      />

      {/* <div className="space-y-4">
        {posts.map(post => (
          <Post
            key={post.id}
            avatar={post.avatar}
            username={post.username}
            timeAgo={post.timeAgo}
            content={post.content}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Feed;