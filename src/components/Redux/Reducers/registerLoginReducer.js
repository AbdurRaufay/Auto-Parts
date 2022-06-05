import {
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAILURE,
	LOGOUT_FAILURE,
	LOGOUT_SUCCESS,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_FAILURE,
	UPDATE_PROFILE_RESET,
	UPDATE_PASSWORD_REQUEST,
	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_FAILURE,
	UPDATE_PASSWORD_RESET,
	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILURE,
	CLEAR_ERROR,
} from "../Consents/loginReducerConsents";

export const loginReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case REGISTER_REQUEST:
		case LOAD_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
		case LOAD_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case LOGOUT_SUCCESS:
			return {
				loading: false,
				user: null,
				isAuthenticated: false,
			};
		case LOGIN_FAILURE:
		case REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case LOGOUT_FAILURE:
			return {
				...state,
				isAuthenticated: false,
				error: action.payload,
			};
		case LOAD_USER_FAILURE:
			return {
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const updateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_PROFILE_REQUEST:
		case UPDATE_PASSWORD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case UPDATE_PROFILE_SUCCESS:
		case UPDATE_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				isUpdated: action.payload,
			};
		case UPDATE_PROFILE_FAILURE:
		case UPDATE_PASSWORD_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_PROFILE_RESET:
		case UPDATE_PASSWORD_RESET:
			return {
				...state,
				isUpdated: false,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const forgotPasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case FORGOT_PASSWORD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		case FORGOT_PASSWORD_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
export const clearError = () => {
	return {
		type: CLEAR_ERROR,
	};
};
