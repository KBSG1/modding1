import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  Users, 
  Eye, 
  Send, 
  DollarSign,
  Gift,
  Settings,
  Maximize,
  Volume2
} from 'lucide-react';
import { motion } from 'framer-motion';
import ChatComponent from '../components/ChatComponent';
import DonationModal from '../components/DonationModal';

const Stream: React.FC = () => {
  const { id } = useParams();
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const streamData = {
    title: 'Crypto Trading Live - Making $10K Today! 🚀',
    streamer: 'CryptoKing',
    avatar: '👑',
    viewers: 15234,
    followers: '124K',
    category: 'Crypto Trading',
    earnings: '45.2 ETH',
    uptime: '3h 24m',
    streamHealth: 'Excellent'
  };

  return (
    <div className="p-6 pt-24 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Main Stream Area */}
      <div className="lg:col-span-3">
        {/* Video Player */}
        <div className="bg-black rounded-xl overflow-hidden mb-6 relative group">
          <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                📺
              </div>
              <p className="text-lg font-semibold mb-2">Live Stream Simulation</p>
              <p className="text-gray-300 text-sm">Real streaming would integrate with WebRTC/IPFS</p>
            </div>
            
            {/* Stream Controls Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-3">
                  <button className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-black/80 transition-colors">
                    <Volume2 className="w-5 h-5 text-white" />
                  </button>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
                    3:24:15
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-black/80 transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                  <button className="bg-black/60 backdrop-blur-sm p-2 rounded-lg hover:bg-black/80 transition-colors">
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Live Badge */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>LIVE</span>
            </div>
            
            {/* Viewer Count */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{streamData.viewers.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Stream Info */}
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-2">{streamData.title}</h1>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md">
                  {streamData.category}
                </span>
                <span>Started {streamData.uptime} ago</span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>{streamData.streamHealth}</span>
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isFollowing
                    ? 'bg-gray-600 text-white hover:bg-gray-700'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                <Heart className={`w-4 h-4 inline mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Streamer Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                {streamData.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-white">{streamData.streamer}</h3>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{streamData.followers} followers</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">{streamData.earnings}</div>
              <div className="text-sm text-gray-400">Total earnings today</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDonationModal(true)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-green-500/25"
          >
            <DollarSign className="w-5 h-5" />
            <span>Donate Crypto</span>
          </motion.button>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Send Gift</span>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <ChatComponent />
      </div>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        streamerName={streamData.streamer}
      />
    </div>
  );
};

export default Stream;