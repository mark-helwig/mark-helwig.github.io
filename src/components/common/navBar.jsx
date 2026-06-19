import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import useTheme from "../../hooks/useTheme";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { theme, toggleTheme } = useTheme();

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "experience"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/experience">Experience</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "publications"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/publications">Publications</Link>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/education">Education</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<button
				type="button"
				className="theme-toggle-button"
				onClick={toggleTheme}
				aria-label={
					theme === "dark"
						? "Switch to light mode"
						: "Switch to dark mode"
				}
			>
				<FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
			</button>
		</React.Fragment>
	);
};

export default NavBar;
