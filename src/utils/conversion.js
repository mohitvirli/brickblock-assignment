import { getUnits } from "./ico";

export const getCoinsCount = (ico, key) => {
	const units = getUnits();
	return (ico.getIn(['currency', key, 'value'])/units[key].value).toFixed(2);
};

export const getActiveCurrency = () => 'USD'; // Change it to any

export const getConvertedCurrency = (value, key, conversion) => {
	const activeCurrency = getActiveCurrency();
	const conversionRatio = conversion.getIn([key, activeCurrency, 'price']);
	return (value*conversionRatio).toFixed(2);
};