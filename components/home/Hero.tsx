import Button from '../common/Button';

export default function Hero() {
  return (
    <section style={{ padding: '4rem 0', textAlign: 'center' }}>
      <p>Welcome to Bella Vita</p>
      <h1>Fine dining inspired by Italian tradition</h1>
      <p>Reserve a table or explore our seasonal menu.</p>
      <Button type="button">View Menu</Button>
    </section>
  );
}
