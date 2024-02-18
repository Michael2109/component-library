import type { ColorTheme } from './color/color-theme';
import type { ButtonTheme } from './button-theme';
import type { InputTheme } from './input-theme';
import type { TypographiesTheme } from '@/theme/typographies-theme';

export interface Theme {
  dark: boolean;
  fontFamily?: string;
  fontSize: string;
  button: ButtonTheme;
  color: ColorTheme;
  code: CodeTheme;
  input: InputTheme;
  typographies: TypographiesTheme;
}
