import React, { useState } from 'react';
import Head from 'next/head';
import { NavBar } from '@/components';

export function MainLayout({ children }) {
  const [showNav, setShowNav] = useState(true);

  const handleNavClick = () => setShowNav(prev => !prev);
  return (
    <>
      <Head>
        <title>CHANGE THIS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div
          className={`ease-in-out transition-all duration-700  ${
            showNav ? 'w-[100%] max-w-[160px]' : 'w-[10%] max-w-[40px]'
          }`}
        >
          <NavBar showNav={showNav} handleNavClick={handleNavClick} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
