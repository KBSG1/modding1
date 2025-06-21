import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3Provider } from './context/Web3Context';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Creator from './pages/Creator';
import Profile from './pages/Profile';
import Governance from './pages/Governance';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stream/:id" element={<Stream />} />
              <Route path="/creator" element={<Creator />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/governance" element={<Governance />} />
            </Routes>
          </Layout>
        </Router>
      </Web3Provider>
    </QueryClientProvider>
  );
}

export default App;