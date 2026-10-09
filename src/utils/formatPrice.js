const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Formats a number as a US dollar amount, e.g. 12.5 -> "$12.50"
export function formatPrice(value) {
  return formatter.format(value);
}
