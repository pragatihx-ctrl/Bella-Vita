export default function GalleryGrid() {
  return (
    <section>
      <h2>Gallery</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div style={{ minHeight: '150px', background: '#f3f4f6' }} />
        <div style={{ minHeight: '150px', background: '#f3f4f6' }} />
        <div style={{ minHeight: '150px', background: '#f3f4f6' }} />
      </div>
    </section>
  );
}
