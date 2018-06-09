import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, SET_USER } from './action_types';
import { API_URL } from '../api/API_URLS'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export function logoutUserFromReduxState(){
	return function(dispatch){
		dispatch({
			type: UNAUTH_USER
		})
	}
}

export function setUserToReduxState(user){
	return function(dispatch){
		dispatch({
			type: AUTH_USER
		})
		dispatch({
			type: SET_USER,
			payload: user
		})
		// redirect to route
		history.push('/profile');
	}
}
