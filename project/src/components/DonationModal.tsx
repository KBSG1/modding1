import React, { useState } from 'react';
import { X, DollarSign, Gift, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  streamerName: string;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, streamerName }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ETH');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [
    { amount: '0.01', currency: 'ETH', usd: '$40' },
    { amount: '0.05', currency: 'ETH', usd: '$200' },
    { amount: '0.1', currency: 'ETH', usd: '$400' },
    { amount: '0.5', currency: 'ETH', usd: '$2,000' },
  ];

  const currencies = [
    { symbol: 'ETH', name: 'Ethereum', icon: '⟠' },
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿' },
    { symbol: 'USDT', name: 'Tether', icon: '₮' },
    { symbol: 'STREAM', name: 'Stream Token', icon: '🎬' },
  ];

  const handleDonate = async () => {
    setIsProcessing(true);
    
    // Simulate transaction processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    alert(`Successfully donated ${amount} ${currency} to ${streamerName}! (Demo transaction)`);
    
    setIsProcessing(false);
    onClose();
    setAmount('');
    setMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-gray-800 border border-gray-700/50 rounded-2xl p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Donate to {streamerName}</h2>
                  <p className="text-sm text-gray-400">Support with cryptocurrency</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Currency Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Select Currency</label>
              <div className="grid grid-cols-2 gap-2">
                {currencies.map((curr) => (
                  <button
                    key={curr.symbol}
                    onClick={() => setCurrency(curr.symbol)}
                    className={`p-3 rounded-lg border transition-all ${
                      currency === curr.symbol
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{curr.icon}</span>
                      <div className="text-left">
                        <div className="font-medium">{curr.symbol}</div>
                        <div className="text-xs text-gray-400">{curr.name}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Preset Amounts */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Quick Amounts</label>
              <div className="grid grid-cols-2 gap-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset.amount}
                    onClick={() => setAmount(preset.amount)}
                    className="p-3 border border-gray-600 bg-gray-700/50 hover:border-green-500 hover:bg-green-500/10 rounded-lg transition-all text-center"
                  >
                    <div className="font-semibold text-white">{preset.amount} {preset.currency}</div>
                    <div className="text-xs text-gray-400">{preset.usd}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Custom Amount</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.001"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
                  {currency}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say something nice..."
                rows={3}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none"
              />
            </div>

            {/* Platform Fee Info */}
            <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Gift className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Donation Breakdown</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>To {streamerName}:</span>
                  <span className="text-green-400">95% ({amount ? (parseFloat(amount) * 0.95).toFixed(4) : '0.00'} {currency})</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform fee:</span>
                  <span className="text-gray-400">5% ({amount ? (parseFloat(amount) * 0.05).toFixed(4) : '0.00'} {currency})</span>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg disabled:shadow-none"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  <span>Donate {amount || '0'} {currency}</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DonationModal;