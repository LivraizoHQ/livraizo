import React from 'react';
import { AppLayout } from './components';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
