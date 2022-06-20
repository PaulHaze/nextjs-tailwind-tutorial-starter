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
      <div className="flex flex-grow">
        <div
          className={`ease-in-out transition-all duration-700 ${
            showNav ? 'min-w-[150px] w-[150px]' : 'min-w-[40px] w-[40px]'
          }`}
        >
          <NavBar showNav={showNav} handleNavClick={handleNavClick} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
