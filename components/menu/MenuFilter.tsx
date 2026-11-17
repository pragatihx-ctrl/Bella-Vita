export default function MenuFilter() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <button type="button">All</button>
      <button type="button">Starters</button>
      <button type="button">Mains</button>
      <button type="button">Desserts</button>
    </div>
  );
}
