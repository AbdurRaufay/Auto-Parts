import axios from "axios";
import {
	All_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCCESS,
	ALL_PRODUCT_FAILURE,
	PRODUCT_DETAIL_REQUEST,
	PRODUCT_DETAIL_SUCCESS,
	PRODUCT_DETAIL_FAILURE,
	CLEAR_ERROR,
} from "../Consents/productConsents";

export const getProducts =
	(keyword = "", category) =>
	async (dispatch) => {
		try {
			dispatch({
				type: All_PRODUCT_REQUEST,
			});
			let link = `api/products?keyword=${keyword}`;
			if (category) {
				link = `api/products?keyword=${keyword}&category=${category}`;
			}

			const { data } = await axios.get(link);
			dispatch({
				type: ALL_PRODUCT_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ALL_PRODUCT_FAILURE,
				payload: error.response.data.message,
			});
		}
	};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_DETAIL_REQUEST,
		});
		const { data } = await axios.get(`/api/product/${id}`);
		console.log(data);
		dispatch({
			type: PRODUCT_DETAIL_SUCCESS,
			payload: data.product,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAIL_FAILURE,
			payload: error.response.data.message,
		});
	}
};

export const clearError = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERROR,
	});
};
