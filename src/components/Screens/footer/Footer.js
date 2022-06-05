// import React from "react";
// import facebook from "../images/facebook.png";
// import instagram from "../images/instagram.jpg";
// const Footer = () => {
// 	return (
// 		<footer id="footer">
// 			<div className="leftFooter">
// 				<h3>Visit Our Website</h3>
// 				<img src={facebook} alt="facebook" />
// 				<img src={instagram} alt="instagram" />
// 			</div>
// 			<div className="rightFooter">
// 				<h3>Contact Us</h3>
// 				<h3>About Us</h3>
// 			</div>
// 			<div className="centerFooter">
// 				<h2>Our Services</h2>
// 				<h4>MotorCycle Part</h4>
// 				<h4>Car Part</h4>
// 				<h4>Bike Part</h4>
// 				<h4>Tracter</h4>
// 				<h4>PleanCoach</h4>
// 				<h4>4BY4</h4>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<footer className="container">
			<section className="footer">
				<div className="main-heading">
					<h3>Ecommerce Website</h3>
				</div>
				<div className="social">
					<a href="https://www.facebook.com/">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="https://twitter.com/">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://www.instagram.com/">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://www.linkedin.com/">
						<i className="fab fa-linkedin-in"></i>
					</a>
				</div>
				<ul className="list">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#">Terms</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
