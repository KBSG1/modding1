import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  TrendingUp, 
  User, 
  Vote,
  Plus,
  Trophy,
  Gamepad2,
  Music,
  Palette
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/creator', icon: Plus, label: 'Go Live' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/governance', icon: Vote, label: 'Governance' },
  ];

  const categories = [
    { icon: Gamepad2, label: 'Gaming', viewers: '2.1M' },
    { icon: Music, label: 'Music', viewers: '890K' },
    { icon: Palette, label: 'Art', viewers: '456K' },
    { icon: TrendingUp, label: 'Crypto', viewers: '234K' },
  ];

  const topStreamers = [
    { name: 'CryptoKing', viewers: '15.2K', avatar: '👑' },
    { name: 'GameMaster', viewers: '12.8K', avatar: '🎮' },
    { name: 'ArtistPro', viewers: '9.4K', avatar: '🎨' },
    { name: 'MusicLive', viewers: '7.6K', avatar: '🎵' },
  ];

  return (
    <aside className="w-64 bg-gray-800/30 backdrop-blur-lg border-r border-gray-700/50 fixed left-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-6">
        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.label}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm">{category.label}</span>
                </div>
                <span className="text-xs text-purple-400">{category.viewers}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Top Streamers */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Top Streamers
          </h3>
          <div className="space-y-3">
            {topStreamers.map((streamer, index) => (
              <div
                key={streamer.name}
                className="flex items-center space-x-3 p-2 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-sm">
                  {streamer.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">
                    {streamer.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {streamer.viewers} viewers
                  </div>
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;