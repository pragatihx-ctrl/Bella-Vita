import type { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>{children}</div>;
}
