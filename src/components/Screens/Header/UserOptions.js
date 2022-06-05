import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { logout } from "../../Redux/Actions/loginRegisterAction";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "@material-ui/core";

const UserOptions = ({ user }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = React.useState(false);
	const options = [
		{
			icon: <ListAltIcon />,
			name: "order",
			func: order,
		},
		{
			icon: <PersonOutlineIcon />,
			name: "account",
			func: account,
		},
		{
			icon: <ExitToAppIcon />,
			name: "logoutUser",
			func: logoutUser,
		},
	];

	if (user.role === "admin") {
		options.unshift({
			icon: <DashboardIcon />,
			name: "Dashboard",
			func: dashboard,
		});
	}
	function order() {
		navigate("/orders");
	}
	function account() {
		navigate("/account");
	}
	function dashboard() {
		navigate("/dashboard");
	}
	function logoutUser() {
		dispatch(logout());
		navigate("/loginRegister");
	}

	return (
		<Fragment>
			<Backdrop open={isOpen} style={{ zIndex: "10" }} />
			<SpeedDial
				className="speed-dial"
				ariaLabel="SpeedDial"
				onClose={() => {
					setIsOpen(false);
				}}
				onOpen={() => {
					setIsOpen(true);
				}}
				open={isOpen}
				direction="down"
				icon={
					<img
						className="speedDailIcon"
						alt="profile"
						src={
							user.avatar.url
								? user.avatar.url
								: "profile"
						}
					/>
				}
			>
				{options.map((item, key) => {
					return (
						<SpeedDialAction
							key={key}
							icon={item.icon}
							tooltipTitle={item.name}
							onClick={() => {
								item.func();
								setIsOpen(false);
							}}
						/>
					);
				})}
			</SpeedDial>
		</Fragment>
	);
};
export default UserOptions;
