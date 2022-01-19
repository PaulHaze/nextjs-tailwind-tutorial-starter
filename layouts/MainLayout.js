import React from 'react';
import Head from 'next/head';
import { NavBar } from '@Components';

export function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>CHANGE THIS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <NavBar />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
