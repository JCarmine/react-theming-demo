import theme from 'styled-theming';
import palmettoDesignTokens from '@palmetto/palmetto-design-tokens/build/js/variables-color';

const brandLight = palmettoDesignTokens.color.brand.light.base.value;
const brandDark = palmettoDesignTokens.color.brand.dark.base.value;

export const backgroundColor = theme('mode', {
  light: brandLight,
  dark: brandDark
});

export const textColor = theme('mode', {
  light: brandDark,
  dark: brandLight
});

export const buttonBackgroundColor = theme('mode', {
  light: brandDark,
  dark: brandLight
});

export const buttonTextColor = theme('mode', {
  light: brandLight,
  dark: brandDark
});
