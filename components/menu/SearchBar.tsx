export default function SearchBar() {
  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="search"
        placeholder="Search menu items"
        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: '1px solid #d1d5db' }}
      />
    </div>
  );
}
