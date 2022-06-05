import { useState, Fragment, useEffect } from "react";
import KeyIcon from "@mui/icons-material/Key";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import "./UpdatePassword.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Screens/Home/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	loadUser,
	updatePasswordAction,
} from "../Redux/Actions/loginRegisterAction";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { UPDATE_PASSWORD_RESET } from "../Redux/Consents/loginReducerConsents";

const UpdatePassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isUpdate, loading, error } = useSelector(
		(state) => state.updateProfile
	);
	const [oldPassword, setoldPassword] = useState("");
	const [newPassword, setnewPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	const submitProfileUpdate = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("oldPassword", oldPassword);
		myForm.set("newPassword", newPassword);
		myForm.set("confirmPassword", confirmPassword);
		dispatch(updatePasswordAction(myForm));
	};

	useEffect(() => {
		// if (user) {
		// 	setName(user.name);
		// 	setEmail(user.email);
		// 	setAvatar(user.avatar.url);
		// }
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
		if (isUpdate) {
			toast.success("Profile Updated Successfully");
			dispatch(loadUser());
			navigate("/account");
			dispatch({
				type: UPDATE_PASSWORD_RESET,
			});
		}
	}, [dispatch, error, toast, navigate, isUpdate]);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className="password-Container">
						<div className="updtePassword-Box">
							<form
								className="updateform"
								encType="multipart/form-data"
								onSubmit={submitProfileUpdate}
							>
								<div className="UpdatePassword">
									<KeyIcon />
									<input
										className="updatePassword-input"
										type="password"
										placeholder="Old Password"
										value={oldPassword}
										onChange={(e) =>
											setoldPassword(
												e.target.value
											)
										}
									/>
								</div>
								<div className="UpdatePassword">
									<LockOpenIcon />
									<input
										className="updatePassword-input"
										type="password"
										placeholder="New Password"
										value={newPassword}
										onChange={(e) =>
											setnewPassword(
												e.target.value
											)
										}
									/>
								</div>
								<div className="UpdatePassword">
									<LockIcon />
									<input
										className="updatePassword-input"
										type="password"
										placeholder="Confirm Password"
										value={confirmPassword}
										onChange={(e) =>
											setconfirmPassword(
												e.target.value
											)
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

export default UpdatePassword;
