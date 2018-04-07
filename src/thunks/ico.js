import { setData } from "../actions/ico";

const BASE_URL = '';

export const getICOData = () => {
	return dispatch => {
		return fetch(BASE_URL)
			.then(response => response.json())
			.then(data => dispatch(setData(data)));
	};
};