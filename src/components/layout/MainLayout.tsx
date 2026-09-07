import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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
