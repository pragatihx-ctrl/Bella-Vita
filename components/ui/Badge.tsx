export default function Badge({ label }: { label: string }) {
  return (
    <span style={{ display: 'inline-flex', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: '#f3f4f6', color: '#111827', fontSize: '0.75rem' }}>
      {label}
    </span>
  );
}
