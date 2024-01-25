import { getBaseFontSize, normalizeNumber } from '@/utils';

const header = document.querySelector('header') as HTMLElement;

const root = document.getElementById('root') as HTMLDivElement;

root.style.paddingTop = `${header.offsetHeight}px`;

const baseFontSize = getBaseFontSize();

const [initialPadding, scrolledPadding] = calculatePadding(
  '--initial-padding',
  '--scrolled-padding',
  baseFontSize,
);

const scrollDistance = calculateScrollDistance(initialPadding, scrolledPadding);

let padding = initialPadding;

let opacity = 0;

function calculatePadding(initial: string, scrolled: string, length = 1) {
  const computedStyle = getComputedStyle(header);

  const initialPadding = parseInt(computedStyle.getPropertyValue(initial));

  const scrolledPadding = parseInt(computedStyle.getPropertyValue(scrolled));

  return [initialPadding * length, scrolledPadding * length];
}

function calculateScrollDistance(initial: number, scrolled: number) {
  const distance = (initial - scrolled) * 2;

  return Math.max(distance, 1);
}

function updatePadding(scrollY: number) {
  padding = Math.max(initialPadding - scrollY / 2, scrolledPadding);

  header.style.paddingBlock = `${padding / baseFontSize}rem`;
}

function updateOpacity(scrollY: number) {
  opacity = normalizeNumber(scrollY, scrollDistance);

  header.style.setProperty('--opacity', opacity.toString());
}

export function scrollEffect() {
  const { scrollY } = window;

  const isScrolled = scrollY > scrollDistance;

  if (!isScrolled || padding !== scrolledPadding) {
    updatePadding(scrollY);
  }

  if (!isScrolled || opacity !== 1) {
    updateOpacity(scrollY);
  }
}
