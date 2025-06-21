import React from 'react';
import { 
  User, 
  Edit, 
  Settings, 
  Trophy, 
  Calendar,
  MapPin,
  Link as LinkIcon,
  Users,
  Eye,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { useWeb3 } from '../context/Web3Context';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const { account, balance, streamTokenBalance } = useWeb3();

  const userStats = [
    { label: 'Total Earnings', value: '234.5 ETH', icon: DollarSign, color: 'text-green-400' },
    { label: 'Followers', value: '124.2K', icon: Users, color: 'text-blue-400' },
    { label: 'Total Views', value: '2.1M', icon: Eye, color: 'text-purple-400' },
    { label: 'Rank', value: '#42', icon: Trophy, color: 'text-yellow-400' }
  ];

  const recentStreams = [
    {
      title: 'Crypto Trading Masterclass',
      date: '2 days ago',
      viewers: '15.2K',
      earnings: '45.2 ETH',
      duration: '3h 24m'
    },
    {
      title: 'Market Analysis & Live Trading',
      date: '5 days ago',
      viewers: '12.8K',
      earnings: '32.1 ETH',
      duration: '2h 45m'
    },
    {
      title: 'Portfolio Review & Q&A',
      date: '1 week ago',
      viewers: '9.4K',
      earnings: '28.7 ETH',
      duration: '1h 52m'
    }
  ];

  const achievements = [
    { title: 'First Stream', description: 'Completed your first live stream', icon: '🎬', earned: true },
    { title: 'Rising Star', description: 'Gained 1000 followers', icon: '⭐', earned: true },
    { title: 'Crypto Expert', description: 'Streamed for 100 hours in Crypto category', icon: '💎', earned: true },
    { title: 'Community Builder', description: 'Reached 10K followers', icon: '👥', earned: false },
    { title: 'Top Earner', description: 'Earn 1000 ETH in donations', icon: '💰', earned: false },
    { title: 'Consistency King', description: 'Stream for 30 consecutive days', icon: '🔥', earned: false }
  ];

  return (
    <div className="p-6 pt-24">
      {/* Profile Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-4xl">
              👑
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">CryptoKing</h1>
              <p className="text-gray-400 mb-4">Professional Crypto Trader & Educator</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Global</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkIcon className="w-4 h-4" />
                  <span>cryptoking.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Edit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
            
            <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Overview */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>Creator Statistics</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {userStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-4 text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Streams */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Streams</h2>
            
            <div className="space-y-4">
              {recentStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-4 hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{stream.title}</h3>
                    <span className="text-green-400 font-semibold">{stream.earnings}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span>{stream.date}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{stream.viewers}</span>
                    </div>
                    <span>{stream.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span>Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all ${
                    achievement.earned
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-gray-700/30 border-gray-600/30 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className={`font-semibold ${
                        achievement.earned ? 'text-yellow-300' : 'text-gray-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Wallet Info */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Wallet Info</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">ETH Balance</div>
                <div className="text-xl font-bold text-white">{balance} ETH</div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                <div className="text-sm text-purple-300 mb-1">STREAM Tokens</div>
                <div className="text-xl font-bold text-purple-200">{streamTokenBalance}</div>
              </div>
              
              {account && (
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Wallet Address</div>
                  <div className="text-sm text-white font-mono break-all">
                    {account.slice(0, 12)}...{account.slice(-12)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors">
                Withdraw Earnings
              </button>
              
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors">
                Stream Settings
              </button>
              
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors">
                Analytics Dashboard
              </button>
              
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors">
                Community Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;