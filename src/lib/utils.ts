/**
 * Simple utility to join class names together.
 * Useful for conditional styling with CSS Modules.
 */
export function cn(...classes: (string | undefined | boolean | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a number as a currency string.
 */
export function formatCurrency(
  amount: number,
  locale = "en-US",
  currency = "USD"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
