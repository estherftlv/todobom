import * as AT from '../action.types';
import firebaseManager from '../../services/firebaseManager';

import {setUser, setMiniUsers, setUserData} from "../actions/user.actions";

const firebase = new firebaseManager();
const firebaseMiddleware = store => {
	const onSuccess = user => {
		store.dispatch(setUser(user));
		if(user.uid){

			console.log(`user is authenticated user.uid: ${user.uid}, user.email:${user.email}`)
		}
			else {
			}
	}

	const refreshMiniUsers = action =>{firebase.orderByChild(`/miniUsers/${action.payload.uid}`, "active", true, data =>{store.dispatch(setMiniUsers(data));action.callback()});}



	firebase.onAuth(onSuccess);

	return next => action => {
		switch (action.type) {
			case AT.LOGOUT:
				firebase.logout();
				break;

			case AT.AUTHENTICATE:
				const onSuccess = user => store.dispatch(setUser(user));

				firebase.authenticate({
					...action.payload, onSuccess, onError: () => {
					}
				});
				break;
			case AT.ADD_MINI_USER:
			  firebase.push('/miniUsers/',action.payload.uid, action.payload,refreshMiniUsers(action));
				break;
			case AT.UPDATE_MINI_USER:
			  //const refreshMiniUsers = () =>{firebase.get(`/miniUsers/${action.payload.uid}`, data =>{store.dispatch(setMiniUsers(data));action.callback()});}
				firebase.set(`/miniUsers/${action.payload.uid}/${action.payload.id}`, action.payload,refreshMiniUsers(action));
				break;
			case AT.DELETE_CURRENT_MINI_USER:
				firebase.set(`/miniUsers/${action.payload.uid}/${action.payload.id}/active`,false, refreshMiniUsers(action));
				break;
			default:
				break;
		}

		return next(action);
	};
};

export default firebaseMiddleware;
