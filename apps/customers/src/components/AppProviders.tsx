"use client";

import React from "react";
import { RaitonProvider } from "@axazara/raiton-styles";
import { ModalsProvider } from "@axazara/raiton-molecules";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <RaitonProvider
        theme={{
          fontFamily: "var(--font-poppins)",
          components: {
            Text: {
              classNames: {
                root: "font-poppins",
              },
            },
            Modal: {
              classNames: {
                modal: "p-8",
              },
            },
            Tag: {
              classNames: {
                inner: "font-poppins",
              },
            },
            InputField: {
              classNames: {
                root: "font-poppins text-neutral-60 text-p-01",
                input: "rounded-xl border border-neutral-80 font-poppins",
                label: "font-poppins",
              },
            },
          },
        }}
      >
        <ModalsProvider>{children}</ModalsProvider>
      </RaitonProvider>
    </QueryClientProvider>
  );
}
