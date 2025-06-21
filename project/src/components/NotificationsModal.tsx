import React from 'react';
import { X, Bell, Gift, Users, TrendingUp, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'donation',
      title: 'New Donation Received',
      message: 'CryptoWhale donated 5.2 ETH to your stream',
      time: '2 minutes ago',
      icon: Gift,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 2,
      type: 'follower',
      title: 'New Follower',
      message: 'GameFan123 started following you',
      time: '15 minutes ago',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 3,
      type: 'milestone',
      title: 'Milestone Reached',
      message: 'Your stream reached 10K viewers!',
      time: '1 hour ago',
      icon: TrendingUp,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 4,
      type: 'system',
      title: 'Platform Update',
      message: 'New features available in your creator dashboard',
      time: '3 hours ago',
      icon: Bell,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 5,
      type: 'reminder',
      title: 'Stream Reminder',
      message: 'Your scheduled stream starts in 30 minutes',
      time: '4 hours ago',
      icon: Clock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
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
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="relative w-full max-w-md bg-gray-800 border border-gray-700/50 rounded-2xl shadow-2xl max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Notifications</h2>
                  <p className="text-sm text-gray-400">{notifications.length} new notifications</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto max-h-96">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border-l-4 ${notification.borderColor} ${notification.bgColor} border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors cursor-pointer`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${notification.bgColor} border ${notification.borderColor}`}>
                      <notification.icon className={`w-4 h-4 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white text-sm">{notification.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{notification.message}</p>
                      <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700/50">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors">
                Mark All as Read
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NotificationsModal;