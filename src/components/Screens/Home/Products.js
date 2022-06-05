import { Fragment, useState } from "react";
import "./Home.css";
import Product from "./Product";
import HelmetComp from "./HelmetComp";
import { getProducts } from "../../Redux/Actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "./Loader";
import Search from "./Search";
import { useParams } from "react-router-dom";

const Home = () => {
	const categories = [
		"Mobile",
		"laptop",
		"electronics",
		"computer",
	];
	const [category, setCategory] = useState("");
	const { keyword } = useParams();
	const dispatch = useDispatch();
	const { products, loading } = useSelector(
		(state) => state.products
	);
	useEffect(() => {
		const fetchedData = async () => {
			await dispatch(getProducts(keyword, category));
		};
		fetchedData();
	}, [dispatch, keyword, category]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<HelmetComp title="Home Page" />
					<Search />

					<h3 className="category-heading">Category</h3>
					<ul className="categoryBox">
						{categories.map((category) => (
							<li
								className="category-link"
								key={category}
								onClick={() => {
									setCategory(category);
								}}
							>
								{category}
							</li>
						))}
					</ul>

					{/* <h2>Product Features</h2> */}
					<div className="container">
						{products.length > 0 &&
							products.map((product) => {
								return (
									<Product
										key={product._id}
										product={product}
									/>
								);
							})}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Home;
