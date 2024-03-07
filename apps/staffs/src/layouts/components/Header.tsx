'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '../../hooks/use-scroll';
import { cn } from '../../lib/utils';



export function Header() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-neutral-20 p-5`,
        {
          'border-b border-neutral-20 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-neutral-20 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
             <Image src="/assets/logo-black.svg" width={100} height={100} alt='' />
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-12 w-12 rounded-full bg-[#d4d4d8] flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
