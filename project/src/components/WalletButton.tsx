import React from 'react';
import { Wallet, LogOut } from 'lucide-react';
import { useWeb3 } from '../context/Web3Context';

const WalletButton: React.FC = () => {
  const { isConnected, account, balance, connectWallet, disconnectWallet } = useWeb3();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected && account) {
    return (
      <div className="flex items-center space-x-2">
        <div className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2">
          <div className="text-xs text-gray-400">Balance</div>
          <div className="text-sm font-medium">{parseFloat(balance).toFixed(4)} ETH</div>
        </div>
        
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm font-medium text-green-300">
            {formatAddress(account)}
          </span>
        </div>
        
        <button
          onClick={disconnectWallet}
          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connectWallet}
      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25"
    >
      <Wallet className="w-4 h-4" />
      <span>Connect Wallet</span>
    </button>
  );
};

export default WalletButton;