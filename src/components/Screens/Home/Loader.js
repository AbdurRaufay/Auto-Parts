import "./Loader.css";
import { BeatLoader } from "react-spinners";
import { jsx } from "@emotion/react";

const overRide = jsx`
	margin-top: 30px;
	margin-bottom: 30px;
`;
const Loader = () => {
	return (
		<div className="loader">
			<BeatLoader jsx={overRide} size={50} color="red" />
		</div>
	);
};

export default Loader;
