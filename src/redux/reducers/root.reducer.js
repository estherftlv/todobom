import {combineReducers} from "redux";

// reducers
import user from './user.reducer';
import activities from './activities.reducer';

export default combineReducers({
	user,
	activities
});
