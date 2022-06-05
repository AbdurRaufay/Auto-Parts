import { useState, Fragment, useEffect } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import "./ForgotPassword.css";
import Loader from "../Screens/Home/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	forgotPasswordAction,
} from "../Redux/Actions/loginRegisterAction";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const { message, loading, error } = useSelector(
		(state) => state.forgotPassword
	);
	const [email, setEmail] = useState("");
	const forgotPasswordUpdate = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("email", email);
		dispatch(forgotPasswordAction(myForm));
	};

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
		if (message) {
			toast.success(message);
		}
	}, [dispatch, error, toast, message]);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className="updateProfile-Container">
						<div className="updateProfile-Box">
							<form
								className="updateform"
								onSubmit={forgotPasswordUpdate}
							>
								<div className="register-email">
									<MailOutlinedIcon />
									<input
										className="updateEmail-input"
										type="email"
										placeholder="Email"
										name="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<input
									type="submit"
									className="updatebtn"
								/>
							</form>
							<ToastContainer autoClose={3000} />
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default ForgotPassword;
