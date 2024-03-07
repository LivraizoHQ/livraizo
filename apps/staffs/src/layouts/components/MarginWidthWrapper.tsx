import { ReactNode } from 'react';

export function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col md:ml-60 sm:border-neutral-70 min-h-screen">
      {children}
    </div>
  );
}
