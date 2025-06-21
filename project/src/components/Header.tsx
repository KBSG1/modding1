import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Settings } from 'lucide-react';
import { useWeb3 } from '../context/Web3Context';
import WalletButton from './WalletButton';
import NotificationsModal from './NotificationsModal';
import SettingsModal from './SettingsModal';

const Header: React.FC = () => {
  const { streamTokenBalance } = useWeb3();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 px-6 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modding.net
              </span>
            </Link>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search streams, creators..."
                className="bg-gray-700/50 border border-gray-600/50 rounded-lg pl-10 pr-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg px-3 py-1.5">
              <span className="text-sm text-purple-300 font-medium">
                {streamTokenBalance} MOD
              </span>
            </div>
            
            <button 
              onClick={() => setShowNotifications(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            
            <button 
              onClick={() => setShowSettings(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
            >
              <Settings className="w-5 h-5" />
            </button>
            
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Modals */}
      <NotificationsModal 
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
      
      <SettingsModal 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
};

export default Header;