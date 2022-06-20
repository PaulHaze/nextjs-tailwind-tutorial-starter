import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Nav.module.scss';

export function NavLink({ linkRef, linkText }) {
  const router = useRouter();
  return (
    <li>
      <Link href={linkRef}>
        <a
          href={linkRef}
          className={`${styles.sidebarLink} ${
            router.pathname === linkRef && styles.active
          }`}
        >
          {linkText}
        </a>
      </Link>
    </li>
  );
}
