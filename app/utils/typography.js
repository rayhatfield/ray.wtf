import Typography from 'typography';

export const typography = new Typography({
	baseFontSize: '18px',
	baseLineHeight: 1.722222,
	headerFontFamily: [
        'Vitesse SSm A', 'Vitesse SSm B',
        'Gotham Narrow SSm A', 'Gotham Narrow SSm B'],
	bodyFontFamily: ['Sentinel SSm A', 'Sentinel SSm B'],
    bodyColor: 'bisque',
	scaleRatio: 1.2,
	overrideStyles: () => ({
		'a, a:visited, a:link': {
			color: 'inherit',
			textDecoration: 'none',
			borderBottom: '1px dotted currentColor', // rgba(0,0,0,0.4)',
		},
		'pre[class*=language-], code[class*=language-]': {
			tabSize: 2,
			fontSize: '14px',
			fontFamily: '"Operator Mono SSm A", "Operator Mono SSm B"',
		}
	})
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const rhythm = typography.rhythm;
export const scale = typography.scale;
