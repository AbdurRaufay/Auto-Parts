import React from "react";
import ReactStars from "react-rating-stars-component";
import profile from "../images/profile.JPG";
const ReviewCard = ({ review }) => {
	const options = {
		edit: false,
		color: "rgba(20, 20, 20, 0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 7 : 12,
		value: review.rating,
		isHalf: true,
	};
	return (
		<div className="reviewCard">
			<img alt="profile" src={profile} className="profile" />
			<div className="reviewInfo">
				<p className="userReview">
					User Name:{"    "}
					{review.name}
				</p>
				<ReactStars {...options} />
				<span className="comm">
					<b> Comment:</b>
					{"     "} {review.comment}
				</span>
			</div>
		</div>
	);
};

export default ReviewCard;
