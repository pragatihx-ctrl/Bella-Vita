export default function ReservationForm() {
  return (
    <form style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
      <label>
        Name
        <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }} />
      </label>
      <label>
        Email
        <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }} />
      </label>
      <label>
        Date & Time
        <input type="datetime-local" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }} />
      </label>
      <button type="submit" style={{ padding: '0.75rem 1.25rem', borderRadius: '0.75rem', border: 'none', background: '#111827', color: '#fff' }}>
        Book Table
      </button>
    </form>
  );
}
