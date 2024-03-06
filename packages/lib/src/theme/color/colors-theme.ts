import type { ColorVariants } from '@/theme/color/color-variants';
import type { ColorTheme } from '@/theme/color/color-theme';

export interface ColorsTheme {
  primary: ColorTheme;
  black: ColorTheme;
  white: ColorTheme;
  secondary: ColorTheme;
  success: ColorTheme;
  info: ColorTheme;
  warning: ColorTheme;
  danger: ColorTheme;
  surface: ColorVariants;
}
