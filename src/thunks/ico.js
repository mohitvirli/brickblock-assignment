import { setICOData } from "../actions/ico";
import { BASE_URL } from "../constants/url";

export const getICOData = () => {
	return dispatch => {
		return fetch(`${BASE_URL}/inputs`)
			.then(response => response.json())
			.then(data => dispatch(setICOData(data)))
			.catch(err => {throw err;});
	};
};