import type { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e5e7eb', background: '#fff' }}>
      {children}
    </div>
  );
}
