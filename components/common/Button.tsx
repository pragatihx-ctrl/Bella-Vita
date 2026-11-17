import type { ButtonHTMLAttributes } from 'react';

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{
        border: 'none',
        borderRadius: '9999px',
        background: '#111827',
        color: '#fff',
        padding: '0.75rem 1.25rem',
        cursor: 'pointer',
      }}
    />
  );
}
