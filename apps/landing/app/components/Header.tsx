/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Box } from '@axazara/raiton-atoms';
import { CloseCircleOutline } from '@axazara/raiton-icons';

export function Header() {
  return (
    <header className={`z-20 font-poppins transition-all duration-300`}>
      <nav className="flex flex-row justify-between items-center layout mx-auto w-full py-6">
        <Link href="/">
          <Image src="/assets/livraizo-logo.svg" width={132} height={80} alt="logo" />
        </Link>
        <Box className="ml-12 space-x-5">
          <Link href="" className="text-p-02-medium text-white">
            About
          </Link>
          <Link href="/" className="text-p-02-medium text-white">
            A propos
          </Link>
        </Box>
        <label htmlFor="toggle-mob-menu" className="lg:hidden flex items-center text-white">
          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1.58203H21M1 8.58203H21M1 15.582H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </label>
        <input className="hidden" type="checkbox" name="toggle-mob-menu" id="toggle-mob-menu" />
        <ul
          id="menu"
          className="lg:flex text-p-02-medium text-neutral-30 md:flex-row items-start flex-col lg:static lg:space-x-6 flex-grow justify-center absolute top-full hidden z-10 layout mx-auto"
        >
          <li className="hide-menu-btn hidden w-full flex-row justify-between px-4">
            <Link href="/">
              <Image src="/assets/logo-black.svg" width={132} height={32} alt="logo" />
            </Link>
            <label htmlFor="toggle-mob-menu">
              <CloseCircleOutline className="w-5 h-5 text-neutral-10" />
            </label>
          </li>
          <li className="flex items-center justify-between space-y-4 lg:hidden action-button-container">
            <Link href="" className="text-p-02-medium text-black">
              About
            </Link>
            <Link href="/" className="text-p-02-medium text-black">
              A propos
            </Link>
            <Button variant="subtle" className="text-black">
              Log in
            </Button>
            <Button radius={64} variant="filled" className="text-black">
              Créer un compte
            </Button>
          </li>
        </ul>
        <div className="lg:flex flex-row items-center space-x-4 hidden">
          <Button variant="subtle" className="text-white">
            Log in
          </Button>
          <Button radius={64} variant="filled" className="bg-white text-black">
            Créer un compte
          </Button>
        </div>
      </nav>
    </header>
  );
}
