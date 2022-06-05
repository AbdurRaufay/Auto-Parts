import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

import { Button } from "./Button.js";
import UserOptions from "./UserOptions";
const Header = () => {
	const { isAuthenticated, user } = useSelector(
		(state) => state.user
	);
	const [isOpen, setIsOpen] = useState(false);

	const appearMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="main-nav">
				<div className="logo">
					<h3>
						<span>A</span>bdu
						<span>R</span>auf
					</h3>
				</div>
				<div
					className={
						isOpen
							? "menu-link mobile-menu-link"
							: "menu-link"
					}
				>
					<ul>
						<li>
							<Link
								to="/"
								style={{ textDecoration: "none" }}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/products"
								style={{ textDecoration: "none" }}
							>
								Products
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								style={{ textDecoration: "none" }}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="cart">
					<ul className="social-media-desktop">
						<li>
							<Link
								to="/loginRegister"
								style={{ textDecoration: "none" }}
							>
								<Button>Login Register</Button>
							</Link>
						</li>
						<li>
							<Link to="/cart" className="cart-logo">
								<BsCartFill />
							</Link>
						</li>

						<li>
							{isAuthenticated && (
								<UserOptions user={user} />
							)}
						</li>
					</ul>
					<div className="hamburger-menu">
						<Link to="#" onClick={appearMenu}>
							<GiHamburgerMenu />
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
