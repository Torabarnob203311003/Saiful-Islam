import API from '../services/authService';


const ChatService = {
  /**
   * Get chat messages between current user and seller
   * @param {string} sellerId - ID of the seller
   * @returns {Promise} - Promise containing the chat history
   */
  getChatMessages: async (sellerId) => {
    try {
      const response = await API.get(`/chat-messages/${sellerId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      throw error;
    }
  },

  /**
   * Send a message to a seller
   * @param {string} receiverId - ID of the message receiver (seller)
   * @param {string} content - Message content
   * @returns {Promise} - Promise containing the sent message data
   */
  sendMessage: async (receiverId, content) => {
    try {
      const response = await API.post('/send-message', {
        receiver_id: receiverId,
        content
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  /**
   * Get seller information by ID
   * @param {string} sellerId - ID of the seller
   * @returns {Promise} - Promise containing the seller data
   */
  getSellerInfo: async (sellerId) => {
    try {
      const response = await API.get(`/get-seller/${sellerId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching seller info:', error);
      throw error;
    }
  },

  /**
   * Mark messages as read
   * @param {string} senderId - ID of the message sender
   * @returns {Promise} - Promise containing operation result
   */
  markMessagesAsRead: async (senderId) => {
    try {
      const response = await API.post('/mark-messages-read', {
        sender_id: senderId
      });
      return response.data;
    } catch (error) {
      console.error('Error marking messages as read:', error);
      throw error;
    }
  }
};

export default ChatService;