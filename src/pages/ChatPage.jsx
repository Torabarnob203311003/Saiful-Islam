import { useState, useEffect, useContext, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Send, ArrowLeft, Clock, Check, CheckCheck } from 'lucide-react';
// import { AuthContext } from '../../context/AuthContext';
import API from '../services/authService';
import { AuthContext } from '../context/AuthContext';


export default function ChatPage() {
  const { sellerId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const messagesEndRef = useRef(null);
  
  // Get seller info from location state or fetch it
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Try to get seller data from location state first
        if (location.state?.seller) {
          setSellerData(location.state.seller);
        } else {
          // If not available in state, fetch it
          const response = await API.get(`/get-seller/${sellerId}`);
          if (response.data.status) {
            setSellerData(response.data.data);
          } else {
            throw new Error('Failed to fetch seller information');
          }
        }
        
        // Load chat history
        await fetchChatHistory();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    } else {
      navigate('/login');
    }
  }, [sellerId, user, navigate, location.state]);

  // Fetch chat history between current user and seller
  const fetchChatHistory = async () => {
    try {
      const response = await API.get(`/chat-messages/${sellerId}`);
      if (response.data.status) {
        setMessages(response.data.data);
      } else {
        throw new Error('Failed to load chat messages');
      }
    } catch (err) {
      console.error('Error loading chat messages:', err);
      setError('Failed to load messages. Please try again.');
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Optimistically add message to UI
    const tempMessage = {
      id: `temp-${Date.now()}`,
      content: newMessage,
      sender_id: user.id,
      created_at: new Date().toISOString(),
      status: 'sending',
    };
    
    setMessages(prevMessages => [...prevMessages, tempMessage]);
    setNewMessage('');
    
    try {
      const response = await API.post('/send-message', {
        receiver_id: sellerId,
        content: newMessage
      });
      
      if (response.data.status) {
        // Update the temp message with the actual message data
        setMessages(prevMessages => 
          prevMessages.map(msg => 
            msg.id === tempMessage.id ? {...response.data.data, status: 'sent'} : msg
          )
        );
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      
      // Mark the message as failed
      setMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === tempMessage.id ? {...msg, status: 'failed'} : msg
        )
      );
    }
  };

  // Format timestamp for messages
  const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Message status indicator component
  const MessageStatus = ({ status }) => {
    switch (status) {
      case 'sending':
        return <Clock size={14} className="text-gray-400" />;
      case 'sent':
        return <Check size={14} className="text-gray-400" />;
      case 'delivered':
        return <CheckCheck size={14} className="text-gray-400" />;
      case 'read':
        return <CheckCheck size={14} className="text-blue-500" />;
      case 'failed':
        return <span className="text-red-500 text-xs">Failed</span>;
      default:
        return null;
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!sellerData) return <div className="text-center p-4">Seller information not available</div>;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="mr-4 p-1 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex items-center">
            <div className="relative">
              <img 
                src={sellerData.image} 
                alt={sellerData.full_name} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="ml-3">
              <h3 className="font-medium text-sm">{sellerData.full_name}</h3>
              <p className="text-xs text-gray-500">
                {sellerData.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Send size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">Start a conversation with {sellerData.full_name}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((message) => {
                const isSentByUser = message.sender_id === user.id;
                
                return (
                  <div 
                    key={message.id} 
                    className={`flex ${isSentByUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="flex flex-col max-w-[70%]">
                      <div 
                        className={`rounded-lg px-4 py-2 ${
                          isSentByUser 
                            ? 'bg-amber-100 text-amber-800 rounded-br-none' 
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      
                      <div className={`flex items-center mt-1 text-xs text-gray-500 ${
                        isSentByUser ? 'justify-end' : 'justify-start'
                      }`}>
                        <span>{formatMessageTime(message.created_at)}</span>
                        {isSentByUser && (
                          <span className="ml-1">
                            <MessageStatus status={message.status} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>
      
      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button 
              type="submit"
              disabled={!newMessage.trim()}
              className={`ml-2 p-2 rounded-full ${
                newMessage.trim() 
                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}