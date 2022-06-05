import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
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
	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILURE,
	CLEAR_ERROR,
} from "../Consents/loginReducerConsents";
import { toast } from "react-toastify";

import axios from "axios";
// login
export const loginAction = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			"/api/login",
			{
				email,
				password,
			},
			config
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data.user,
		});
		toast.success("Login Success");
	} catch (error) {
		dispatch({
			type: LOGIN_FAILURE,
			payload: error.response.data.message,
		});
		toast.error(error.response.data.message);
	}
};
// Registeration
export const registerAction = (registerData) => async (dispatch) => {
	try {
		dispatch({
			type: REGISTER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const { data } = await axios.post(
			"/api/register",
			registerData,
			{
				config,
			}
		);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: data.user,
		});
		toast.success("Register Success");
	} catch (error) {
		dispatch({
			type: REGISTER_FAILURE,
			payload: error.response.data.message,
		});
		toast.error(error.response.data.message);
	}
};
// load user if user is login the store it in state
export const loadUser = () => async (dispatch) => {
	try {
		dispatch({
			type: LOAD_USER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get("/api/me", config);

		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAILURE,
		});
		toast.error(error.response.data.message);
	}
};
// logout
export const logout = () => async (dispatch) => {
	try {
		await axios.get("/api/logout");
		dispatch({
			type: LOGOUT_SUCCESS,
		});
		toast.success("Logout Success");
	} catch (error) {
		dispatch({
			type: LOGOUT_FAILURE,
			payload: error.response.data.message,
		});
		toast.error(error.response.data.message);
	}
};
// update profile
export const updateProfileAction =
	(updateData) => async (dispatch) => {
		try {
			dispatch({
				type: UPDATE_PROFILE_REQUEST,
			});
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};

			const { data } = await axios.put(
				"/api/updateProfile",
				updateData,
				{
					config,
				}
			);

			dispatch({
				type: UPDATE_PROFILE_SUCCESS,
				payload: data.success,
			});
			toast.success("Register Success");
		} catch (error) {
			dispatch({
				type: UPDATE_PROFILE_FAILURE,
				payload: error.response.data.message,
			});
			toast.error(error.response.data.message);
		}
		dispatch({
			type: UPDATE_PROFILE_RESET,
		});
	};
// update password
export const updatePasswordAction =
	(passwords) => async (dispatch) => {
		try {
			dispatch({
				type: UPDATE_PASSWORD_REQUEST,
			});
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const { data } = await axios.put(
				"/api/updatePassword",
				passwords,
				{
					config,
				}
			);

			dispatch({
				type: UPDATE_PASSWORD_SUCCESS,
				payload: data.success,
			});
			toast.success("Password Update Successfully");
		} catch (error) {
			dispatch({
				type: UPDATE_PASSWORD_FAILURE,
				payload: error.response.data.message,
			});
			toast.error(error.response.data.message);
		}
	};
// forgot password
export const forgotPasswordAction = (email) => async (dispatch) => {
	try {
		dispatch({
			type: FORGOT_PASSWORD_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			"/api/forgotPassword",
			{
				email,
			},
			config
		);

		dispatch({
			type: FORGOT_PASSWORD_SUCCESS,
			payload: data.message,
		});
		// toast.success("Password Reset Link Sent To Your Email");
	} catch (error) {
		dispatch({
			type: FORGOT_PASSWORD_FAILURE,
			payload: error.response.data.message,
		});
		// toast.error(error.response.data.message);
	}
};
export const clearError = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERROR,
	});
	toast.dismiss(toast.TYPE.ERROR);
};
