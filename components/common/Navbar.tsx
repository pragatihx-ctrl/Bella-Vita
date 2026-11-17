import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/">Bella Vita</Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reservation">Reserve</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
