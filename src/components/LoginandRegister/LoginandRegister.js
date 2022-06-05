import { useState, Fragment, useRef, useEffect } from "react";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FaceIcon from "@mui/icons-material/Face";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Screens/Home/Loader";
import { useDispatch, useSelector } from "react-redux";

import {
	// clearError,
	loginAction,
	registerAction,
} from "../Redux/Actions/loginRegisterAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginandRegister = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginTab = useRef(null);
	const registerTab = useRef(null);
	const switcherTab = useRef(null);
	const { loading, isAuthenticated } = useSelector(
		(state) => state.user
	);
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [avatar, setAvatar] = useState();
	const [avatarReview, setReviewAvatar] = useState("logo192.png");
	const { name, email, password } = user;
	const loginSubmitt = (e) => {
		e.preventDefault();
		dispatch(loginAction(loginEmail, loginPassword));
	};

	const registerSubmitt = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("password", password);
		myForm.set("avatar", avatar);

		dispatch(registerAction(myForm));
	};

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setReviewAvatar(reader.result);
					setAvatar(reader.result);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({
				...user,
				[e.target.name]: e.target.value,
			});
		}
	};

	const switchTabs = (e, tab) => {
		if (tab === "login") {
			switcherTab.current.classList.add("shiftToNeutral");
			switcherTab.current.classList.remove("shiftToRight");
			registerTab.current.classList.remove(
				"shiftToNeutralForm"
			);
			loginTab.current.classList.remove("shiftToLeft");
		}
		if (tab === "register") {
			switcherTab.current.classList.add("shiftToRight");
			switcherTab.current.classList.remove("shiftToNeutral");
			registerTab.current.classList.add("shiftToNeutralForm");
			loginTab.current.classList.add("shiftToLeft");
		}
	};
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<div className="loginRegister-Container">
					<div className="loginRegister-Box">
						<div>
							<div className="loginRegister-Toggle">
								<p
									onClick={(e) =>
										switchTabs(e, "login")
									}
								>
									LOGIN
								</p>
								<p
									onClick={(e) =>
										switchTabs(e, "register")
									}
								>
									REGISTER
								</p>
							</div>
							<button ref={switcherTab}></button>
						</div>
						<form
							className="loginform"
							ref={loginTab}
							onSubmit={loginSubmitt}
						>
							<div className="loginEmail">
								<ContactMailOutlinedIcon />
								<input
									className="loginEmail-input"
									type="email"
									placeholder="Email"
									value={loginEmail}
									onChange={(e) =>
										setLoginEmail(e.target.value)
									}
								/>
							</div>
							<div className="loginPassword">
								<LockOutlinedIcon />
								<input
									className="loginPassword-input"
									type="password"
									placeholder="Password"
									value={loginPassword}
									onChange={(e) =>
										setLoginPassword(
											e.target.value
										)
									}
								/>
							</div>
							<Link
								to="/password/forgot"
								className="forgot"
							>
								ForgotPassword ?
							</Link>
							<input
								type="submit"
								value="Login"
								className="loginbtn"
							/>
						</form>
						<form
							className="registerform"
							encType="multipart/form-data"
							ref={registerTab}
							onSubmit={registerSubmitt}
						>
							<div className="registerName">
								<FaceIcon />
								<input
									className="registerName-input"
									type="text"
									placeholder="Name"
									name="name"
									value={name}
									onChange={registerDataChange}
								/>
							</div>
							<div className="register-email">
								<MailOutlinedIcon />
								<input
									className="registerEmail-input"
									type="email"
									placeholder="Email"
									name="email"
									value={email}
									onChange={registerDataChange}
								/>
							</div>
							<div className="register-password">
								<LockOutlinedIcon />
								<input
									className="registerPassword-input"
									type="password"
									placeholder="Password"
									value={password}
									name="password"
									onChange={registerDataChange}
								/>
							</div>
							<div
								id="registerImage"
								className="register-Image"
							>
								<img
									src={avatarReview}
									alt="avatar Review"
								/>

								<input
									type="file"
									name="avatar"
									accept="image/*"
									onChange={registerDataChange}
								/>
							</div>
							<input
								type="submit"
								className="registerbtn"
							/>
						</form>
						<ToastContainer autoClose={3000} />
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default LoginandRegister;
