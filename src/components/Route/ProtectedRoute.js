import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, loading } = useSelector(
		(state) => state.user
	);

	return isAuthenticated ? (
		children
	) : (
		<Navigate to="/loginRegister" />
	);
};

export default ProtectedRoute;
