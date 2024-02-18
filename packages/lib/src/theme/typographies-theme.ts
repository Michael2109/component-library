import type { TypographyTheme } from '@/theme/typography-theme';

export interface TypographiesTheme {
  fontFamily: string;
  fontWeight: string;
  textWrap: string;

  h1: TypographyTheme;
  h2: TypographyTheme;
  h3: TypographyTheme;
  h4: TypographyTheme;
  h5: TypographyTheme;
  h6: TypographyTheme;
  p: TypographyTheme;
}
