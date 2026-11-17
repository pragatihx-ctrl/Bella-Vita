export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ marginBottom: '1.5rem' }}>
      <p style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.75rem' }}>Section</p>
      <h2 style={{ margin: '0.5rem 0' }}>{title}</h2>
      {subtitle ? <p style={{ color: '#6b7280' }}>{subtitle}</p> : null}
    </header>
  );
}
