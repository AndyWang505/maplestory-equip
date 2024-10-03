import React from 'react'
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode; // 用於插入的元件或內容
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-lg">title</h1>
      </header>
      <main className="max-w-3xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout
