import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface Web3ContextType {
  isConnected: boolean;
  account: string | null;
  balance: string;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  provider: ethers.BrowserProvider | null;
  streamTokenBalance: string;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.00');
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [streamTokenBalance, setStreamTokenBalance] = useState('1,250.50');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        
        setProvider(provider);
        setAccount(address);
        setBalance(ethers.formatEther(balance));
        setIsConnected(true);
        
        localStorage.setItem('walletConnected', 'true');
      } else {
        alert('Please install MetaMask to connect your wallet');
      }
    } catch (error: any) {
      // Handle user rejection gracefully
      if (error.code === 4001 || error.code === 'ACTION_REJECTED') {
        // User rejected the connection request - this is expected behavior
        console.log('Wallet connection cancelled by user');
        return;
      }
      
      // Log other errors as they may indicate real issues
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setBalance('0.00');
    setProvider(null);
    localStorage.removeItem('walletConnected');
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum && localStorage.getItem('walletConnected')) {
        await connectWallet();
      }
    };
    
    checkConnection();
  }, []);

  return (
    <Web3Context.Provider value={{
      isConnected,
      account,
      balance,
      connectWallet,
      disconnectWallet,
      provider,
      streamTokenBalance
    }}>
      {children}
    </Web3Context.Provider>
  );
};

declare global {
  interface Window {
    ethereum?: any;
  }
}