import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";
import "../src/assets/sass/auth.scss"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
	<React.StrictMode>
		<App />
		<ToastContainer autoClose={3000} />
		</React.StrictMode>,
	document.getElementById("root")
);
