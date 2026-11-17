export default function MenuCard({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <article style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1rem' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </article>
  );
}
