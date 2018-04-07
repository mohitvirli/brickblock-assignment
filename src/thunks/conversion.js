import { setConversionData } from "../actions/conversion";
import { BASE_CONVERSION_URL } from "../constants/url";

const getUrl = (type, currency = 'eur') => `${BASE_CONVERSION_URL}${type}-${currency}`;

export const getConversionData = (type, currency) => {
	return dispatch => {
		return fetch(getUrl(type, currency))
			.then(response => response.json())
			.then(data => {
				if (data.success) dispatch(setConversionData(data.ticker));
				else throw data.error;
			})
			.catch(err => {throw err;});
	};
};