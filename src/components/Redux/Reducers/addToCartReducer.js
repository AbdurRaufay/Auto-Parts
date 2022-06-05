import { ADD_TO_CART } from "../Consents/addToCartConsents";

export const addToCartReducer = (
	state = { cartItems: [] },
	action
) => {
	switch (action.type) {
		case ADD_TO_CART:
			const item = action.payload;
			const isItemExist = state.cartItems.find(
				(i) => i.id === item.id
			);
			if (isItemExist) {
				return {
					...state,
					cartItems: state.cartItems.map((i) =>
						i.id === isItemExist.id ? item : i
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		default:
			return { ...state };
	}
};
