// File: src/components/ForumGuide.jsx
import React from 'react';

const ForumGuide = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">How to use Forum?</h2>
      <ol className="list-decimal pl-2 space-y-2">
        <li>Select a category</li>
        <li>See all the posts related to the category</li>
        <li>Also you can create a post about what you think about that category.</li>
      </ol>
    </section>
  );
};

export default ForumGuide;
