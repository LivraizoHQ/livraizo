import React from 'react';

import './css/tailwind.css';
import './css/custom.css';
import type { Metadata } from 'next';
import { AppProviders, Footer } from './components';

export const metadata: Metadata = {
  title: 'Livraizo',
  description: 'Livraizo, la plateforme de livraison de colis entre particuliers.',
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
