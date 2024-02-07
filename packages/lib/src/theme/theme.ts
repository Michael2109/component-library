import type { ColorTheme } from './color-theme'
import type { ButtonTheme } from './button-theme'
import type { InputTheme } from './input-theme'

export interface Theme {
	fontFamily?: string
	fontSize: string
	color: ColorTheme
	button: ButtonTheme
	input: InputTheme
}
