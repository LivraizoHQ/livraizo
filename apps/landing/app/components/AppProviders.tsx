'use client';

import React from 'react';
import { Box } from '@axazara/raiton-atoms';
import { RaitonProvider } from '@axazara/raiton-styles';

export function AppProviders({ children }) {
  return (
    <RaitonProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'var(--font-poppins)',
        components: {
          Text: {
            classNames: {
              root: 'font-poppins',
            },
          },
          InputField: {
            classNames: {
              label: 'font-poppins',
              input: 'font-poppins',
            },
          },
        },
      }}
    >
      <Box component="main">{children}</Box>
    </RaitonProvider>
  );
}
