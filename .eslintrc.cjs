module.exports = {
	root: true,
	// See for info on this preset:
	// https://github.com/linusborg/eslint-config
	extends: ['@linusborg/eslint-config', 'plugin:vue/vue3-essential'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-undef': 'off',
		// add your own rules config here
	},
	env: {
		node: true,
		"vue/setup-compiler-macros": true,
	},
	overrides: [
		{
			files: ['packages/*/src/**/*.vue'],
			env: {
				node: false,
			},
		},
	],
}
