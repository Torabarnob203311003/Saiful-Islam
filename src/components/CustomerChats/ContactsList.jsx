import React, { useState } from 'react';
import ava from '../../assets/Ava.png';

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const contacts = [
    {
      id: 1,
      name: 'Alice',
      avatar: ava,
      lastMessage: 'Hi how are you?',
      lastMessageTime: '10:40 AM',
    },
    {
      id: 2,
      name: 'Bob',
      avatar: ava,
      lastMessage: 'Hello I am fine',
      lastMessageTime: '10:41 AM',
    },
  ];

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="w-full  border-gray-50  p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-full"
        />
      </div>
      
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} className="flex items-center mb-4 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <img src={contact.avatar} alt={contact.name} className="w-8 h-8 rounded-full mr-3" />
            <div className="flex-grow">
              <span className="text-sm">{contact.name}</span>
              <p className="text-xs text-gray-500 mt-1">{contact.lastMessage}</p>
            </div>
            <p className="text-xs text-gray-500">{contact.lastMessageTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

