import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Bella Vita Restaurant',
  description: 'A modern restaurant experience with crafted menus, chef stories, and easy reservations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
