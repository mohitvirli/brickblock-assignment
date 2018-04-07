import {combineReducers} from 'redux-immutable';
import { ico } from './ico';
import { conversion } from "./conversion";

const rootReducer = combineReducers({
	ico,
	conversion
});

export default rootReducer;