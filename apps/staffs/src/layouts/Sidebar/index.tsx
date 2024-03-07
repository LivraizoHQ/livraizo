'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS, SideNavItem } from '../../utils/constants';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 mt-10 fixed border-r border-[#e4e4e7] hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        {/* <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-[#e4e4e7] h-12 w-full"
        >
          
        </Link> */}

        <div className="flex flex-col space-y-2  md:px-6 pt-10">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  // const [subMenuOpen, setSubMenuOpen] = useState(false);
  // const toggleSubMenu = () => {
  //   setSubMenuOpen(!subMenuOpen);
  // };

  return (
    <div className="">
      <Link
        href={item.path}
        className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-[#f4f4f5] ${
          item.path === pathname ? 'bg-zinc-[#f4f4f5]' : ''
        }`}
      >
        {item.icon}
        <span className="font-semibold text-xl flex">{item.title}</span>
      </Link>
    </div>
  );
};
