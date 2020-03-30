import * as AT from '../action.types';

const INITIAL_STATE = [];

const topicsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AT.FETCH_TOPICS_SUCCESS:
			const topics = action.payload;
			return topics;
		default:
			return state;
	}
};

export default topicsReducer;
