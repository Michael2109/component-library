import type { ColorTheme } from './color/color-theme';
import type { ButtonTheme } from './button-theme';
import type { InputTheme } from './input-theme';
import type { TypographiesTheme } from '@/theme/typographies-theme';

export interface Theme {
  fontFamily?: string;
  fontSize: string;
  color: ColorTheme;
  button: ButtonTheme;
  input: InputTheme;
  typographies: TypographiesTheme;
}
