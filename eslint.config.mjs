import config from '@internetstiftelsen/eslint-config-react';

export default [
	...config,
	{
		files: ['src/**/*.{js,jsx}'],
		settings: { react: { version: 'detect' } },
		rules: {
			'react/prop-types': 'off',
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-no-target-blank': 'off',
		},
	},
];
