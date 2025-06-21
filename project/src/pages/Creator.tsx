import React, { useState } from 'react';
import { 
  Video, 
  Settings, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Clock,
  Gift,
  Play,
  Square,
  Mic,
  Camera,
  Monitor
} from 'lucide-react';
import { motion } from 'framer-motion';

const Creator: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [streamTitle, setStreamTitle] = useState('');
  const [streamCategory, setStreamCategory] = useState('Crypto');

  const stats = [
    { label: 'Total Earnings', value: '234.5 ETH', icon: DollarSign, change: '+12.5%', color: 'text-green-400' },
    { label: 'Followers', value: '124.2K', icon: Users, change: '+5.8%', color: 'text-blue-400' },
    { label: 'Stream Hours', value: '1,234', icon: Clock, change: '+23%', color: 'text-purple-400' },
    { label: 'Avg Viewers', value: '8.7K', icon: Eye, change: '+8.2%', color: 'text-orange-400' }
  ];

  const recentDonations = [
    { user: 'CryptoWhale', amount: '5.2 ETH', message: 'Great content!', time: '2 min ago' },
    { user: 'TokenFan', amount: '1.8 ETH', message: 'Keep it up! 🚀', time: '5 min ago' },
    { user: 'StreamLover', amount: '0.5 ETH', message: 'Amazing stream!', time: '12 min ago' },
    { user: 'HODLer', amount: '2.1 ETH', message: 'Diamond hands! 💎', time: '18 min ago' }
  ];

  const categories = [
    'Crypto', 'Gaming', 'Art', 'Music', 'Technology', 'Education', 'Just Chatting'
  ];

  const handleGoLive = () => {
    if (!streamTitle.trim()) {
      alert('Please enter a stream title');
      return;
    }
    setIsLive(!isLive);
  };

  return (
    <div className="p-6 pt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Creator Dashboard</h1>
          <p className="text-gray-400">Manage your streams and track your earnings</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className={`px-4 py-2 rounded-lg font-medium ${
            isLive 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-700 text-gray-300'
          }`}>
            <div className="flex items-center space-x-2">
              {isLive && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              <span>{isLive ? 'LIVE' : 'OFFLINE'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stream Setup */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Video className="w-6 h-6 text-purple-400" />
              <span>Stream Setup</span>
            </h2>
            
            <div className="space-y-6">
              {/* Stream Preview */}
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                      📹
                    </div>
                    <p className="text-lg font-semibold mb-2">Stream Preview</p>
                    <p className="text-gray-400 text-sm">Camera and microphone setup</p>
                  </div>
                </div>
                
                {isLive && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                )}
              </div>

              {/* Stream Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                  <Camera className="w-5 h-5 text-white" />
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                  <Mic className="w-5 h-5 text-white" />
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                  <Monitor className="w-5 h-5 text-white" />
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Stream Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stream Title</label>
                  <input
                    type="text"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    placeholder="What's your stream about?"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={streamCategory}
                    onChange={(e) => setStreamCategory(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Go Live Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoLive}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-3 ${
                  isLive
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                }`}
              >
                {isLive ? <Square className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                <span>{isLive ? 'End Stream' : 'Go Live'}</span>
              </motion.button>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>Analytics</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Donations */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span>Recent Donations</span>
            </h3>
            
            <div className="space-y-3">
              {recentDonations.map((donation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{donation.user}</span>
                    <span className="text-green-400 font-semibold">{donation.amount}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{donation.message}</p>
                  <p className="text-gray-500 text-xs">{donation.time}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stream Stats */}
          {isLive && (
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Live Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Current Viewers</span>
                  <span className="text-white font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Stream Duration</span>
                  <span className="text-white font-semibold">2:34:12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Donations Today</span>
                  <span className="text-green-400 font-semibold">12.4 ETH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">New Followers</span>
                  <span className="text-purple-400 font-semibold">+47</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Creator;