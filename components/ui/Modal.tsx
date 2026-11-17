import type { ReactNode } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'grid', placeItems: 'center' }}>
      <div style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', maxWidth: '600px', width: '100%' }}>{children}</div>
    </div>
  );
}
