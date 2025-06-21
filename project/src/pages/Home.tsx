import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Eye, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const featuredStreams = [
    {
      id: 1,
      title: 'Crypto Trading Live - Making $10K Today!',
      streamer: 'CryptoKing',
      viewers: 15234,
      category: 'Crypto',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      earnings: '45.2 ETH',
      isLive: true
    },
    {
      id: 2,
      title: 'Epic Gaming Session - New World Record Attempt',
      streamer: 'GameMaster',
      viewers: 12876,
      category: 'Gaming',
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      earnings: '32.8 ETH',
      isLive: true
    },
    {
      id: 3,
      title: 'Digital Art Creation - NFT Masterpiece',
      streamer: 'ArtistPro',
      viewers: 9432,
      category: 'Art',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      earnings: '28.1 ETH',
      isLive: true
    },
    {
      id: 4,
      title: 'Live Music Performance - Electronic Beats',
      streamer: 'MusicLive',
      viewers: 7654,
      category: 'Music',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      earnings: '19.6 ETH',
      isLive: true
    }
  ];

  const stats = [
    { label: 'Active Streamers', value: '12,456', icon: Users, trend: '+12%' },
    { label: 'Total Viewers', value: '1.2M', icon: Eye, trend: '+8%' },
    { label: 'Total Donations', value: '45,234 ETH', icon: TrendingUp, trend: '+25%' },
    { label: 'Hours Streamed', value: '98.7K', icon: Clock, trend: '+15%' }
  ];

  return (
    <div className="p-6 pt-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 mb-8"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Welcome to the Future of Live Streaming
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Stream, earn, and govern with Web3 technology. Connect with your audience through cryptocurrency and be part of a decentralized streaming revolution on Modding.net.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/creator"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Start Streaming
            </Link>
            <button className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-700/50">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-8 h-8 text-purple-400" />
              <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured Streams */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Streams</h2>
          <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/stream/${stream.id}`}>
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {stream.isLive && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{stream.viewers.toLocaleString()}</span>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 bg-green-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                    {stream.earnings}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-white line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {stream.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">{stream.streamer}</p>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs">
                      {stream.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;