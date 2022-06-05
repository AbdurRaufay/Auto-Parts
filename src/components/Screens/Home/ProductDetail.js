import React, { Fragment, useEffect, useState } from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/productAction";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { addToCartAction } from "../../Redux/Actions/addToCartAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
const ProductDetail = () => {
	const { prodid } = useParams();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const productDetils = useSelector((state) => {
		return state.productDetils;
	});
	const { loading, product } = productDetils;

	const increaseQuantity = () => {
		if (productDetils.product.stock > quantity) {
			setQuantity(quantity + 1);
		}
	};
	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	const addToCartHandler = () => {
		dispatch(addToCartAction(prodid, quantity));
		toast.success("Product added to cart");
	};

	useEffect(() => {
		const prdId = async () => {
			await dispatch(getProductDetails(prodid));
		};
		prdId();
	}, [dispatch, prodid]);

	const options = {
		edit: false,
		color: "rgba(20, 20, 20, 0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 7 : 12,
		value: product.ratings,
		isHalf: true,
	};
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div
						className="col-lg-8  border p-3 main-section bg-white"
						id="main"
					>
						<div className="row m-0">
							<div
								className="col-lg-4 left-side-product-box pb-3"
								id="image"
							>
								{product.images &&
									product.images.map((item, i) => (
										<img
											className="border p-6"
											src={item.url}
											alt={item.alt}
											key={i}
										/>
									))}
							</div>
							<div className="col-lg-8">
								<div className="right-side-pro-detail border p-3 m-0">
									<div className="row">
										<div
											className="col-lg-12"
											id="prdname"
										>
											<h1 className="m-0 p-0">
												{product.name}
											</h1>
										</div>
									</div>
									<div
										className="col-lg-"
										id="review"
									>
										<span>
											<b>
												{" "}
												{
													<ReactStars
														{...options}
														id="stars"
													/>
												}
											</b>
										</span>
										<span>
											({product.numOfReviews}
											Reviews)
										</span>
									</div>
									<div className="col-lg-12">
										<p
											className="m-0 p-0 price-pro"
											id="price"
										>
											${product.price}
										</p>
									</div>
									<div className="col-lg-12">
										<p id="stockPara">
											status:{""}
											<b
												className={
													product.stock < 1
														? "redColor"
														: "greenColor"
												}
											>
												{product.stock < 1
													? "Out of Stock"
													: "In Stock"}
											</b>
										</p>
									</div>
									<div className="col-lg-4">
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<button
													className="btn-lg btn-outline-secondary"
													id="btnIncDec"
													onClick={
														decreaseQuantity
													}
												>
													-
												</button>
											</div>
											<input
												id="inputDefault"
												readOnly
												value={quantity}
												className="form-control text-center w-80"
											/>
											<button
												className="btn-lg btn-outline-secondary"
												id="btnIncDec"
												onClick={
													increaseQuantity
												}
											>
												+
											</button>
										</div>
									</div>
									<div className="col-lg-12 mt-3">
										<div className="row">
											<div className="col-lg-6 pb-2">
												<button
													className="btn btn-danger w-100"
													onClick={
														addToCartHandler
													}
												>
													Add To Cart
												</button>
											</div>
										</div>
									</div>
									<div className="col-lg-12 pt-2">
										<p>
											<b>Description:</b>
											<br />{" "}
											{product.description}
										</p>
										<hr className="m-0 pt-2 mt-2" />
									</div>
									<button
										className="btn btn-primary"
										type="submit"
									>
										Submit Review{" "}
									</button>
								</div>
							</div>
						</div>
						<p className="h3 mt-5" id="top">
							Product Review
						</p>
						{product.reviews && product.reviews[0] ? (
							<div className="row mt-5">
								<div className="col-lg-12  ">
									{product.reviews &&
										product.reviews.map(
											(review, i) => (
												<ReviewCard
													review={review}
													key={i}
												/>
											)
										)}
								</div>
							</div>
						) : (
							<p className="noReviews">
								{" "}
								No Reviews Yet
							</p>
						)}
					</div>
					<ToastContainer autoClose={3000} />
				</Fragment>
			)}
		</Fragment>
	);
};

export default ProductDetail;
