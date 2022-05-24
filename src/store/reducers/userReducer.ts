import {UserAction, UserActionTypes, UserState} from "../../types/types";

const initialState: UserState = {
	user: null,
	loading: true,
	error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type){
		case UserActionTypes.FETCH_USER:
			return {loading: true, error: null, user: null};
		case UserActionTypes.FETCH_USER_SUCCESS:
			return {loading: false, error: null, user: action.payload};
		case UserActionTypes.FETCH_USER_ERROR:
			return {loading: false, error: action.payload, user: null};
		case UserActionTypes.DELETE_USER:
			return {loading: false, error: null, user: null};
		default:
			return state;
	}
}