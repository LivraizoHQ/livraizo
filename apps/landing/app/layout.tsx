import React from 'react';
import './css/tailwind.css';
import './css/custom.css';
import type { Metadata } from 'next';
import { AppProviders, Footer } from './components';

export const metadata: Metadata = {
  title: 'Create Turborepo',
  description: 'Generated by create turbo',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
