export function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function isRequired(value: string) {
  return value.trim().length > 0;
}
