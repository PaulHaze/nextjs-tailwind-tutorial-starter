import React, { useState } from 'react';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

import { NavLink } from './NavLink';

export function NavBar() {
  const [showHideNav, setShowHideNav] = useState(true);

  const handleNavClick = () => setShowHideNav(prev => !prev);
  return (
    <nav className="h-[100vh] p-5 px-2 py-4 bg-gradient-to-b from-indigo-300/90 to-sky-800/90">
      <div className="flex">
        {showHideNav ? (
          <ChevronDoubleLeftIcon
            onClick={handleNavClick}
            className="w-6 h-6 text-blue-500 bg-[rgba(255,255,255,0.9)] border-2 border-blue-500 rounded"
          />
        ) : (
          <ChevronDoubleRightIcon
            onClick={handleNavClick}
            className="w-6 h-6 text-blue-500 border-2 bg-[rgba(255,255,255,0.9)] border-blue-500 rounded"
          />
        )}
      </div>

      <ul className={`w-full ${!showHideNav && 'hidden'}`}>
        <NavLink linkRef="/" linkText="Home" />
        <NavLink linkRef="/pageone" linkText="Page One" />
      </ul>
    </nav>
  );
}
