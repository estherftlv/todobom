import {combineReducers} from "redux";

// reducers
import user from './user.reducer';
import topics from './topics.reducer';

export default combineReducers({
	user,
	topics
});
