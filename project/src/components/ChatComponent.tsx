import React, { useState, useRef, useEffect } from 'react';
import { Send, Gift, Heart, Crown } from 'lucide-react';

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  type: 'message' | 'donation' | 'follow' | 'system';
  amount?: string;
  avatar?: string;
  badges?: string[];
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'StreamDAO',
      message: 'Welcome to the stream! 🎉',
      timestamp: new Date(),
      type: 'system',
      avatar: '🏛️'
    },
    {
      id: '2',
      user: 'CryptoWhale',
      message: 'Just donated 5 ETH! Great content! 🚀',
      timestamp: new Date(),
      type: 'donation',
      amount: '5 ETH',
      avatar: '🐋',
      badges: ['VIP', 'Whale']
    },
    {
      id: '3',
      user: 'GameFan123',
      message: 'This is amazing! Love the analysis',
      timestamp: new Date(),
      type: 'message',
      avatar: '🎮'
    },
    {
      id: '4',
      user: 'ArtLover',
      message: 'New follower here! 💜',
      timestamp: new Date(),
      type: 'follow',
      avatar: '🎨'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate new messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessages = [
        { user: 'Trader101', message: 'What do you think about ETH right now?', avatar: '📈' },
        { user: 'CryptoNoob', message: 'Thanks for the tutorial!', avatar: '🤓' },
        { user: 'HODLer', message: 'Diamond hands! 💎🙌', avatar: '💎' },
        { user: 'DayTrader', message: 'Nice call on that trade!', avatar: '📊' },
        { user: 'TokenFan', message: 'STREAM tokens to the moon! 🌙', avatar: '🚀' }
      ];
      
      const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        ...randomMessage,
        timestamp: new Date(),
        type: 'message'
      };
      
      setMessages(prev => [...prev.slice(-50), newMsg]); // Keep last 50 messages
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      user: 'You',
      message: newMessage,
      timestamp: new Date(),
      type: 'message',
      avatar: '👤'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'VIP': return 'bg-yellow-500';
      case 'Whale': return 'bg-blue-500';
      case 'Mod': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl h-[600px] flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
        <h3 className="font-semibold text-white">Live Chat</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>15.2K viewers</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="group">
            {msg.type === 'donation' && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 mb-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Gift className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold text-yellow-400">{msg.user}</span>
                  <span className="text-yellow-300">donated {msg.amount}!</span>
                </div>
                <p className="text-gray-300 text-sm">{msg.message}</p>
              </div>
            )}
            
            {msg.type === 'follow' && (
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3 mb-2">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-purple-400" />
                  <span className="font-semibold text-purple-400">{msg.user}</span>
                  <span className="text-purple-300">just followed!</span>
                </div>
              </div>
            )}
            
            {msg.type === 'system' && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{msg.avatar}</span>
                  <span className="text-blue-300 text-sm">{msg.message}</span>
                </div>
              </div>
            )}
            
            {msg.type === 'message' && (
              <div className="flex items-start space-x-3 hover:bg-gray-700/20 rounded-lg p-2 -m-2 transition-colors">
                <div className="text-lg">{msg.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-white text-sm">{msg.user}</span>
                    {msg.badges?.map((badge) => (
                      <span
                        key={badge}
                        className={`${getBadgeColor(badge)} text-white text-xs px-2 py-0.5 rounded-full`}
                      >
                        {badge}
                      </span>
                    ))}
                    <span className="text-xs text-gray-500">{formatTime(msg.timestamp)}</span>
                  </div>
                  <p className="text-gray-300 text-sm break-words">{msg.message}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-700/50">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;