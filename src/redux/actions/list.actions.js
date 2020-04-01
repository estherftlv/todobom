import * as AT from '../action.types';
import {values} from 'lodash';

export const fetchLists = payload => ({
	type: AT.FETCH_LISTS,
	payload
});

export const setLists = payload => ({
	type: AT.FETCH_LISTS_SUCCESS,
	payload: values(payload)
});
