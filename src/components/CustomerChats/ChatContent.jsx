import React, { useState } from 'react';
import ava from '../../assets/Ava.png';


const ChatContent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: 'Hi how are you?',
      isOutgoing: false,
      avatar: ava,
      timestamp: '10:40 AM'
    },
    {
      id: 2,
      message: 'Hello I am fine',
      isOutgoing: true,
      avatar: ava,
      timestamp: '10:41 AM'
    }
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      message: input,
      isOutgoing: true,
      avatar: ava,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-grow p-4 overflow-y-auto bg-white">
        {messages.map(message => (
          <div key={message.id} className={`flex mb-4 ${message.isOutgoing ? 'justify-end' : 'justify-start'}`}>
            {!message.isOutgoing && (
              <div className="mr-2">
                <img src={message.avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
              </div>
            )}
            <div className={`max-w-xs px-4 py-2 rounded-lg ${message.isOutgoing ? 'bg-blue-100 text-blue-900' : 'bg-gray-100'}`}>
              <p className="text-sm">{message.message}</p>
              <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
            </div>
            {message.isOutgoing && (
              <div className="ml-2">
                <img src={message.avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-3 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-grow p-2 bg-gray-100 rounded-full text-sm focus:outline-none"
          />
          <button onClick={handleSend} className="ml-2 text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;

