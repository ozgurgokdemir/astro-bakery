import { getBaseFontSize, normalizeNumber } from '@/utils';

const baseFontSize = getBaseFontSize();

export function useHeader(header: HTMLElement) {
  const computedStyle = getComputedStyle(header);

  const initialPadding = getPadding(computedStyle, '--initial-padding');

  const scrolledPadding = getPadding(computedStyle, '--scrolled-padding');

  const scrollDistance = Math.max((initialPadding - scrolledPadding) * 2, 1);

  let padding = initialPadding;

  let opacity = 0;

  return {
    updatePadding(scrollY: number) {
      if (scrollY > scrollDistance && padding === scrolledPadding) return;

      padding = Math.max(initialPadding - scrollY / 2, scrolledPadding);

      header.style.paddingBlock = `${padding / baseFontSize}rem`;
    },
    updateOpacity(scrollY: number) {
      if (scrollY > scrollDistance && opacity === 1) return;

      opacity = normalizeNumber(scrollY, scrollDistance);

      header.style.setProperty('--opacity', opacity.toString());
    },
  };
}

function getPadding(computedStyle: CSSStyleDeclaration, property: string) {
  const propertyValue = computedStyle.getPropertyValue(property);

  const padding = parseInt(propertyValue.replace('rem', '')) * baseFontSize;

  return padding;
}
