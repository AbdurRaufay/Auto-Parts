import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Header from "./components/Screens/Header/Header";
import Products from "./components/Screens/Home/Products";
import About from "./components/Screens/About/About";
import Contact from "./components/Screens/Contact/Contact";
import ProductDetail from "./components/Screens/Home/ProductDetail";
import "./App.css";
import Search from "./components/Screens/Home/Search";
import Home from "./components/Screens/Home/Home/Home";
import LoginandRegister from "./components/LoginandRegister/LoginandRegister";
import Profile from "./components/LoginandRegister/Profile";
import { useEffect, useState } from "react";
import { loadUser } from "./components/Redux/Actions/loginRegisterAction";
import store from "./store";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/Route/ProtectedRoute";
//import Footer from "./components/Screens/footer/Footer";
import ProfileUpdate from "./components/LoginandRegister/ProfileUpdate";
import UpdatePassword from "./components/LoginandRegister/UpdatePassword";
import ForgotPassword from "./components/LoginandRegister/ForgotPassword";
const App = () => {
	const { isAuthenticated } = useSelector((state) => state.user);
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<>
			<Router>
				{window.location.pathname !== "/loginRegister" ? (
					<Header />
				) : null}{" "}
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/updateProfile"
						element={
							<ProtectedRoute>
								<ProfileUpdate />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/password/update"
						element={
							<ProtectedRoute>
								<UpdatePassword />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/password/forgot"
						element={<ForgotPassword />}
					/>
					<Route path="/products" element={<Products />} />
					<Route
						path="/product/:prodid"
						element={<ProductDetail />}
					/>
					{/* <Route
						exact
						path="/products/:keyword"
						element={<Products />}
					/> */}

					<Route
						path="/loginRegister"
						element={<LoginandRegister />}
					/>
					<Route path="/search" element={<Search />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</>
	);
};

export default App;
