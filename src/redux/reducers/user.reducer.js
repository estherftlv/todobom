import * as AT from '../action.types';
import {values} from 'lodash';

const INITIAL_STATE = {
	checked: false,
	index: 0,
	miniUsers: undefined,
	currentMiniUser: undefined,
	uid: undefined
};



const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AT.SET_USER:
			return {
				...action.payload.user,
				checked: true
			};
		case AT.LOGOUT:
			return {
				INITIAL_STATE
			};


		default:
			return state;
	}
};

export default userReducer;
