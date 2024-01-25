export function normalizeNumber(number: number, max: number) {
  const ratio = number / max;

  const normalized = Math.min(Math.max(0, ratio), 1);

  return normalized;
}

export function getBaseFontSize() {
  const computedStyle = getComputedStyle(document.documentElement);

  const baseFontSize = parseInt(computedStyle.fontSize);

  return baseFontSize;
}
