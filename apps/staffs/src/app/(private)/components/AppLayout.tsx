'use client';

import React from 'react';
import { MarginWidthWrapper, PageWrapper, Header } from '../../../layouts/components';
import '../../../css/tailwind.css'
import '../../../css/custom.css'
import Sidebar from '../../../layouts/Sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
