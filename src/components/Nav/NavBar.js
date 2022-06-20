import React from 'react';

import { BiChevronsLeft } from 'react-icons/bi';

import { routes } from '@Routes';
import { NavLink } from './NavLink';

import styles from './Nav.module.scss';

export function NavBar({ showNav, handleNavClick }) {
  const renderRoutes = routes.map(r => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));
  return (
    <nav className={styles.sidebarContainer}>
      {/* SHOW HIDE BUTTON */}
      <div className={styles.toggleBtnContainer}>
        <button
          type="button"
          onClick={handleNavClick}
          className={styles.toggleBtn}
        >
          <BiChevronsLeft
            className={`${styles.toggleIcon} ${
              showNav ? 'scale-x-100' : '-scale-x-100'
            }`}
          />
        </button>
      </div>
      {/* ROUTES */}
      <ul
        className={`${styles.linksList} ${
          !showNav ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderRoutes}
      </ul>
    </nav>
  );
}
