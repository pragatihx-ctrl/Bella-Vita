export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}
