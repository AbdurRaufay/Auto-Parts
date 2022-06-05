import { useState, Fragment, useEffect } from "react";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import FaceIcon from "@mui/icons-material/Face";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import "./updateProfile.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Screens/Home/Loader";
import { useDispatch, useSelector } from "react-redux";

import {
	clearError,
	loadUser,
	updateProfileAction,
} from "../Redux/Actions/loginRegisterAction";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { UPDATE_PROFILE_RESET } from "../Redux/Consents/loginReducerConsents";

const ProfileUpdate = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);
	const { isUpdate, loading, error } = useSelector(
		(state) => state.updateProfile
	);
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [avatar, setAvatar] = useState(user.avatar.url);
	const [avatarReview, setReviewAvatar] = useState("logo192.png");

	const submitProfileUpdate = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("avatar", avatar);
		dispatch(updateProfileAction(myForm));
	};
	const profileDataChange = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setReviewAvatar(reader.result);
				setAvatar(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
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
				type: UPDATE_PROFILE_RESET,
			});
		}
	}, [dispatch, error, toast, navigate, isUpdate, user]);
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
								encType="multipart/form-data"
								onSubmit={submitProfileUpdate}
							>
								<div className="updateName">
									<FaceIcon />
									<input
										className="updateName-input"
										type="text"
										placeholder="Name"
										name="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
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

								<div
									id="updateImage"
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
										onChange={profileDataChange}
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
export default ProfileUpdate;
