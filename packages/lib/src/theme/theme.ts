import type { ColorsTheme } from './color/colors-theme';
import type { ButtonTheme } from './button-theme';
import type { InputTheme } from './input-theme';
import type { TypographiesTheme } from '@/theme/typographies-theme';
import type { CodeTheme } from '@/theme/code-theme';

export interface Theme {
  fontFamily?: string;
  fontSize: string;
  button: ButtonTheme;
  colors: ColorsTheme;
  code: CodeTheme;
  input: InputTheme;
  typographies: TypographiesTheme;
}
