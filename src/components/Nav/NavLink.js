import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function NavLink({ linkRef, linkText }) {
  const router = useRouter();
  return (
    <li className="">
      <Link href={linkRef}>
        <button
          type="button"
          className={`flex justify-center w-full px-4 py-2 my-4 font-semibold text-center text-sm rounded whitespace-nowrap ${
            router.pathname === linkRef
              ? 'text-blue-700 bg-white'
              : 'text-blue-500/50 bg-blue-50'
          }`}
        >
          {linkText}
        </button>
      </Link>
    </li>
  );
}
