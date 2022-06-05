import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";
const Search = () => {
	const [keyword, setKeyword] = useState("");
	// get the keyword from the search bar
	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			//search bar in the products page
			navigate(`/products/${keyword}`);
		} else {
			navigate(`/products`);
		}
	};
	return (
		<Fragment>
			<form className="search" onSubmit={submitHandler}>
				<input
					className="searchInput"
					type="search"
					placeholder="Search here..."
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<input type="submit" value="search" />
			</form>
		</Fragment>
	);
};

export default Search;
