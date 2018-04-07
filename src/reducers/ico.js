import { getCurrencyData } from "../utils/ico";
import { Map, fromJS } from 'immutable';

const initialState = Map({
	preIco: Map(),
	mainIco: Map()
});

export const ico = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ICO_DATA': {
			const { data } = action;
			const mainIco = Map({
				total: data.ico.length,
				currency: fromJS(getCurrencyData(data.ico)),
			});
			const preIco = Map({
				total: data.preIco.length,
				currency: fromJS(getCurrencyData(data.preIco)),
			});
			return state.set('preIco', preIco)
				.set('mainIco', mainIco);
		}
		default:
			return state;
	}
};