
// src/components/post/PostInput.jsx
import React, { useState } from 'react';
import Avatar from '../shared/Avatar';

const PostInput = ({ avatar, onCreatePost }) => {
  const [postText, setPostText] = useState('');

  const handleSubmit = () => {
    if (postText.trim()) {
      onCreatePost(postText);
      setPostText('');
    }
  };

  return (
    <div className="flex items-center mb-6">
      <Avatar src={avatar} alt="Your profile" />
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none ml-3"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <button 
        onClick={handleSubmit}
        className="ml-3 bg-yellow-500 text-white hover:bg-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
      >
        Create post
      </button>
    </div>
  );
};

export default PostInput;