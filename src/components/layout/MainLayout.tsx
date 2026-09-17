import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate';

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTopOnNavigate />
      <ScrollToHash />
      <Header />

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
