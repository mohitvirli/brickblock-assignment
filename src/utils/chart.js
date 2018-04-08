export const getOptions = (title, options) => ({
	animation: {
		duration: 2000
	},
	title: {
		display: true,
		position: 'bottom',
		text: title,
		fontSize: 16,
		fontFamily: 'cinetype'
	},
	legend: {
		position: 'bottom',
		layout: {
			padding: {
				left: 0,
				right: 0
			}
		},
		labels: {
			boxWidth: 30,
			padding: 10,
			fontSize: 14,
			fontFamily: 'cinetype'
		}
	},
	...options
});

export const getColors = () => (
	[
		'#3be3ae',
		'#3866ff',
		'#f54269',
		'#06cf65',
	]
);