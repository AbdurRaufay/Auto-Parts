import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "react-spinners/BarLoader";
import "./Profile.css";
const Profile = () => {
	const { isAuthenticated, loading, user } = useSelector(
		(state) => state.user
	);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className="profile-container">
						<div>
							<h1 className="profile-name">
								My Profile
							</h1>
							<img
								className="profile-image"
								src={user.avatar.url}
								alt={user.name}
							/>
							<Link
								to="/updateProfile"
								className="edit-profile-button"
							>
								Edit Profile
							</Link>
						</div>
						<div className="profile-info">
							<div className="name-part">
								<h3>Full Name</h3>
								<p>{user.name}</p>
							</div>
							<div className="email-part">
								<h3>Email</h3>
								<p>{user.email}</p>
							</div>
							<div className="joined">
								<h3>Joined on</h3>
								<p>
									{new Date(
										user.createdAt
									).toLocaleDateString()}
								</p>
							</div>
							<div className="link-tag">
								<Link to="/orders" className="order">
									My Orders
								</Link>
								<Link
									to="/password/update"
									className="change-password"
								>
									Change Password
								</Link>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Profile;
