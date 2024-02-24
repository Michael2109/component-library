import type { ColorVariants } from '@/theme/color/color-variants';
import type { ColorTheme } from '@/theme/color/color-theme';

export interface ColorsTheme {
  whiteText: string;
  blackText: string;
  primary: ColorTheme;
  black: ColorTheme;
  white: ColorTheme;
  gray: ColorTheme;
  red: ColorTheme;
  orange: ColorTheme;
  yellow: ColorTheme;
  green: ColorTheme;
  teal: ColorTheme;
  blue: ColorTheme;
  cyan: ColorTheme;
  purple: ColorTheme;
  pink: ColorTheme;
  surface: ColorVariants;
}
