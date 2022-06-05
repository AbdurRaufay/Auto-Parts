import {
	All_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCCESS,
	ALL_PRODUCT_FAILURE,
	PRODUCT_DETAIL_REQUEST,
	PRODUCT_DETAIL_SUCCESS,
	PRODUCT_DETAIL_FAILURE,
	CLEAR_ERROR,
} from "../Consents/productConsents";

export const productReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case All_PRODUCT_REQUEST:
			return {
				loading: true,
				products: [],
			};
		case ALL_PRODUCT_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,
			};
		case ALL_PRODUCT_FAILURE:
			return {
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

export const productDetailReducer = (
	state = { product: {}, loading: true },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAIL_REQUEST:
			return {
				loading: true,
				...state,
			};
		case PRODUCT_DETAIL_SUCCESS:
			return {
				loading: false,
				product: action.payload,
			};
		case PRODUCT_DETAIL_FAILURE:
			return {
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
