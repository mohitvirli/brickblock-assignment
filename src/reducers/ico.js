import { Map, fromJS } from 'immutable';
import { getCurrencyData } from "../utils/ico";

const initialState = Map({
	preIco: Map(),
	mainIco: Map()
});

export const ico = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ICO_DATA': {
			const { data } = action;
			const mainIco = fromJS({
				total: data.ico.length,
				currency: getCurrencyData(data.ico),
			});
			const preIco = fromJS({
				total: data.preIco.length,
				currency: getCurrencyData(data.preIco),
			});
			return state.set('preIco', preIco)
				.set('mainIco', mainIco);
		}
		default:
			return state;
	}
};