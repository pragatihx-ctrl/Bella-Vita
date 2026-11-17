import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Bella Vita Restaurant</h1>
      <p>Experience fresh flavors, elegant dining, and effortless reservations.</p>
      <nav style={{ marginTop: '2rem', display: 'grid', gap: '0.75rem' }}>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reservation">Reservation</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
