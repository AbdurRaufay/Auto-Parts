import {
	applyMiddleware,
	combineReducers,
	compose,
	createStore,
} from "redux";
import thunk from "redux-thunk";
import {
	productReducer,
	productDetailReducer,
} from "./components/Redux/Reducers/productReducer";
import {
	loginReducer,
	updateProfileReducer,
	forgotPasswordReducer,
} from "./components/Redux/Reducers/registerLoginReducer";
import { addToCartReducer } from "./components/Redux/Reducers/addToCartReducer";
const initialState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	},
};

const reducer = combineReducers({
	products: productReducer,
	productDetils: productDetailReducer,
	user: loginReducer,
	updateProfile: updateProfileReducer,
	forgotPassword: forgotPasswordReducer,
	cart: addToCartReducer,
});
const composeEnhancer =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
