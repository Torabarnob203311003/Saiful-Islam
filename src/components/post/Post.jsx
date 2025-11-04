
// src/components/post/Post.jsx
import React from 'react';
import { MoreVertical } from 'lucide-react';
import Avatar from '../shared/Avatar';

const Post = ({ avatar, username, timeAgo, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Avatar src={avatar} alt={username} size="sm" />
          <div className="ml-3">
            <div className="font-semibold text-sm">{username}</div>
            <div className="text-xs text-gray-500">{timeAgo}</div>
          </div>
        </div>
        <button className="text-gray-500">
          <MoreVertical size={16} />
        </button>
      </div>
      <div className="text-sm">
        <p className="font-medium mb-1">It was a great experience for me...</p>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Post;