import React, { useState } from 'react';

import { BiChevronsLeft } from 'react-icons/bi';

import { NavLink } from './NavLink';

import { routes } from '@Routes';

export function NavBar() {
  const [showNav, setShowNav] = useState(true);

  const handleNavClick = () => setShowNav(prev => !prev);

  const renderRoutes = routes.map(r => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));
  return (
    <nav
      className={`h-screen fixed top-0 ${
        showNav ? 'translate-x-0' : '-translate-x-[63%]'
      } ease-in-out duration-300 p-5 px-2 py-4 bg-gradient-to-b from-indigo-300/90 to-sky-800/90 `}
    >
      {/* SHOW HIDE BUTTON */}
      <div className="flex justify-end">
        <div className="w-6 h-6 text-blue-500 border-2 border-blue-500 rounded flex items-center justify-center bg-[rgba(255,255,255,0.9)]">
          <BiChevronsLeft
            onClick={handleNavClick}
            className={`ease-in-out duration-300 w-6 h-6 m-0
          ${showNav ? 'scale-x-100' : '-scale-x-100'}`}
          />
        </div>
      </div>
      {/* ROUTES */}
      <ul
        className={`opacity-1 transition-all duration-500 ${
          !showNav && 'opacity-0'
        }`}
      >
        {renderRoutes}
      </ul>
    </nav>
  );
}
