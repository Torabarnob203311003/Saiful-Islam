import React from 'react';
import ContactList from './ContactsList';
import ChatContent from './ChatContent';

const ChatLayout = () => {
  return (
    <div className="h-screen flex py-8 px-4 pb-24 md:px-8 max-w-7xl mx-auto ">
      <div className="w-1/3 rounded-md border border-gray-200 bg-white p-4">
        <ContactList />
      </div>
      <div className="w-2/3 p-4">
        <ChatContent />
      </div>
    </div>
  );
};

export default ChatLayout;

