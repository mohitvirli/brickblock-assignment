import { Map } from 'immutable';

const initialState = Map({});
export const conversion = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CONVERSION_DATA': {
			const { data } = action;
			return state.mergeIn([data.base, data.target], data);
		}
		default:
			return state;
	}
};