// File: src/components/PopularPostsSection.jsx
import React from 'react';
import img from '../../assets/Ava.png';

const PopularPostsSection = () => {
  const posts = [
    {
      id: 1,
      avatar: img,
      username: 'Linuxoid',
      timeAgo: '3 hrs ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    },
    {
      id: 2,
      avatar: img,
      username: 'Linuxoid',
      timeAgo: '5 hrs ago',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.'
    }
  ];

  return (
    <section className="py-8 px-4 pb-24 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Popular posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between">
              <div className="flex items-center mb-3">
                <img 
                  src={post.avatar} 
                  alt={post.username} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <div className="font-medium">{post.username}</div>
                  <div className="text-xs text-gray-500">{post.timeAgo}</div>
                </div>
              </div>
              {/* <button className="text-gray-500 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
               
              </button> */}
            </div>
            <h3 className="font-medium mb-2">It was a great experience for me..</h3>
            <p className="text-gray-700 text-sm">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPostsSection;

