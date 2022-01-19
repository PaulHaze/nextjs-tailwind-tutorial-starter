import React, { useState } from 'react';

import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

import { NavLink } from './NavLink';

import { routes } from '../../routes';

export function NavBar() {
  const [showHideNav, setShowHideNav] = useState(true);

  const handleNavClick = () => setShowHideNav(prev => !prev);

  const renderRoutes = routes.map(r => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));
  return (
    <nav className="min-h-screen sticky top-0 p-5 px-2 py-4 bg-gradient-to-b from-indigo-300/90 to-sky-800/90">
      <div className="flex w-full">
        {showHideNav ? (
          <BiChevronsLeft
            onClick={handleNavClick}
            className="w-6 h-6 text-blue-500 bg-[rgba(255,255,255,0.9)] border-2 border-blue-500 rounded"
          />
        ) : (
          <BiChevronsRight
            onClick={handleNavClick}
            className="w-6 h-6 pl-[1px] text-blue-500 border-2 bg-[rgba(255,255,255,0.9)] border-blue-500 rounded"
          />
        )}
      </div>
      <ul className={`w-full ${!showHideNav && 'hidden'}`}>{renderRoutes}</ul>
    </nav>
  );
}
