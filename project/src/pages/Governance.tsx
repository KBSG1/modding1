import React, { useState } from 'react';
import { 
  Vote, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Plus,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useWeb3 } from '../context/Web3Context';

const Governance: React.FC = () => {
  const { streamTokenBalance } = useWeb3();
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);

  const governanceStats = [
    { label: 'Total Proposals', value: '127', icon: Vote, color: 'text-blue-400' },
    { label: 'Active Voters', value: '12.4K', icon: Users, color: 'text-green-400' },
    { label: 'Voting Power', value: '1,250', icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Participation Rate', value: '78%', icon: CheckCircle, color: 'text-yellow-400' }
  ];

  const proposals = [
    {
      id: 'prop-001',
      title: 'Reduce Platform Fee from 5% to 3%',
      description: 'Proposal to reduce the platform fee on donations from 5% to 3% to better support content creators and increase competitiveness.',
      status: 'active',
      votesFor: 45230,
      votesAgainst: 12340,
      totalVotes: 57570,
      timeLeft: '3 days',
      proposer: 'CommunityDAO',
      category: 'Economics',
      requiredQuorum: 50000,
      created: '2 days ago'
    },
    {
      id: 'prop-002',
      title: 'Implement NFT Marketplace Integration',
      description: 'Add native NFT marketplace functionality allowing creators to mint and sell NFTs directly through the platform.',
      status: 'active',
      votesFor: 38920,
      votesAgainst: 8760,
      totalVotes: 47680,
      timeLeft: '5 days',
      proposer: 'DevTeam',
      category: 'Features',
      requiredQuorum: 50000,
      created: '1 day ago'
    },
    {
      id: 'prop-003',
      title: 'Launch Creator Grant Program',
      description: 'Establish a $1M fund to provide grants to promising new creators on the platform, funded through platform reserves.',
      status: 'passed',
      votesFor: 78450,
      votesAgainst: 21550,
      totalVotes: 100000,
      timeLeft: 'Ended',
      proposer: 'GrantsDAO',
      category: 'Community',
      requiredQuorum: 50000,
      created: '1 week ago'
    },
    {
      id: 'prop-004',
      title: 'Add Multi-Language Support',
      description: 'Implement support for 15 additional languages to make the platform accessible to a global audience.',
      status: 'rejected',
      votesFor: 23450,
      votesAgainst: 45670,
      totalVotes: 69120,
      timeLeft: 'Ended',
      proposer: 'i18nTeam',
      category: 'Technical',
      requiredQuorum: 50000,
      created: '2 weeks ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'passed': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'rejected': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return Clock;
      case 'passed': return CheckCircle;
      case 'rejected': return XCircle;
      default: return AlertCircle;
    }
  };

  const handleVote = (proposalId: string, vote: 'for' | 'against') => {
    alert(`Voted ${vote} on proposal ${proposalId} (Demo transaction)`);
  };

  return (
    <div className="p-6 pt-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">DAO Governance</h1>
          <p className="text-gray-400">Participate in platform governance and shape the future of StreamDAO</p>
        </div>
        
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25">
          <Plus className="w-5 h-5" />
          <span>Create Proposal</span>
        </button>
      </div>

      {/* Governance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {governanceStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Proposals List */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Active Proposals</h2>
            
            <div className="space-y-6">
              {proposals.map((proposal, index) => {
                const StatusIcon = getStatusIcon(proposal.status);
                const votePercentage = Math.round((proposal.votesFor / proposal.totalVotes) * 100);
                
                return (
                  <motion.div
                    key={proposal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-6 hover:border-purple-500/30 transition-all"
                  >
                    {/* Proposal Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{proposal.title}</h3>
                          <div className={`px-2 py-1 rounded-md text-xs font-medium border flex items-center space-x-1 ${getStatusColor(proposal.status)}`}>
                            <StatusIcon className="w-3 h-3" />
                            <span className="capitalize">{proposal.status}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">{proposal.description}</p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>By {proposal.proposer}</span>
                          <span>{proposal.category}</span>
                          <span>{proposal.created}</span>
                          {proposal.status === 'active' && <span>{proposal.timeLeft} left</span>}
                        </div>
                      </div>
                    </div>

                    {/* Voting Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Voting Progress</span>
                        <span className="text-sm text-gray-400">
                          {proposal.totalVotes.toLocaleString()} / {proposal.requiredQuorum.toLocaleString()} votes
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${votePercentage}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-green-400">For: {proposal.votesFor.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-red-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                          </div>
                        </div>
                        <span className="text-gray-400">{votePercentage}% approval</span>
                      </div>
                    </div>

                    {/* Voting Buttons */}
                    {proposal.status === 'active' && (
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleVote(proposal.id, 'for')}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex-1"
                        >
                          Vote For
                        </button>
                        <button
                          onClick={() => handleVote(proposal.id, 'against')}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex-1"
                        >
                          Vote Against
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Voting Power */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Your Voting Power</h3>
            
            <div className="space-y-4">
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                <div className="text-sm text-purple-300 mb-1">STREAM Tokens</div>
                <div className="text-2xl font-bold text-purple-200">{streamTokenBalance}</div>
                <div className="text-xs text-purple-400 mt-1">1 token = 1 vote</div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Voting Weight</div>
                <div className="text-lg font-semibold text-white">0.012%</div>
                <div className="text-xs text-gray-500 mt-1">of total voting power</div>
              </div>
            </div>
          </div>

          {/* DAO Info */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">How DAO Works</h3>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-xs">1</span>
                </div>
                <div>
                  <div className="font-medium text-white">Create Proposal</div>
                  <div className="text-gray-400">Anyone with 1000+ STREAM tokens can create proposals</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-xs">2</span>
                </div>
                <div>
                  <div className="font-medium text-white">Community Vote</div>
                  <div className="text-gray-400">Token holders vote for or against proposals</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-xs">3</span>
                </div>
                <div>
                  <div className="font-medium text-white">Implementation</div>
                  <div className="text-gray-400">Approved proposals are implemented by the dev team</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">You voted on "Reduce Platform Fee"</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">New proposal: "NFT Marketplace"</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Proposal "Creator Grants" passed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;