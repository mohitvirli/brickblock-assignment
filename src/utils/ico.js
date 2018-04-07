

export const getCurrencyData = (data) => {
	const currencies = {};

	data.forEach(d => {
		if (typeof currencies[d.currency] === 'undefined') {
			currencies[d.currency] = {
				length: 1,
				value: d.value,
			}
		} else {
			currencies[d.currency] = {
				length: currencies[d.currency].length + 1,
				value: currencies[d.currency].value + d.value,
			}
		}
	});

	return currencies;
};

export const getUnits = () => ({
	ETH: {
		name: 'Ethereum',
		unit: 'Ethers',
		value: 1000000000000000000
	},
	BTC: {
		name: 'Bitcoins',
		unit: 'Bitcoins',
		value: 100000000
	},
	LTC: {
		name: 'Litecoins',
		unit: 'Lites',
		value: 100000000
	}
});

