export function backgroundColorToCssVariable(color: string) {
	return `--color-${color}`
}

export function calculateFontColor(color?: string) {
	let textColor
	if (color) {
		let hexColor = color
		// If a leading # is provided, remove it
		if (hexColor.slice(0, 1) === '#') {
			hexColor = hexColor.slice(1)
		}

		// If a three-character hexcode, make six-character
		if (hexColor.length === 3) {
			hexColor = hexColor
				.split('')
				.map(function (hex) {
					return hex + hex
				})
				.join('')
		}

		// Convert to RGB value
		const r = parseInt(hexColor.substr(0, 2), 16)
		const g = parseInt(hexColor.substr(2, 2), 16)
		const b = parseInt(hexColor.substr(4, 2), 16)

		// Get YIQ ratio
		const yiq = (r * 299 + g * 587 + b * 114) / 1000

		// Check contrast
		textColor = yiq >= 128 ? 'black' : 'white'
	} else {
		textColor = 'black'
	}

	return `--color-${textColor}-text`
}

export function borderColorToCssVariable(color: string) {
	return `--color-${color}-border`
}
