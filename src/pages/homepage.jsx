import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
	faMailBulk,
	faFileLines,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllExperience from "../components/experience/allExperience";
import Education from "../components/homepage/education";
import AllPublications from "../components/publications/allPublications";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [scrolled, setScrolled] = useState(false);
	const [emailCopied, setEmailCopied] = useState(false);
	const copyTimeoutRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		return () => clearTimeout(copyTimeoutRef.current);
	}, []);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(INFO.main.email);
		setEmailCopied(true);
		clearTimeout(copyTimeoutRef.current);
		copyTimeoutRef.current = setTimeout(() => setEmailCopied(false), 2000);
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.pageYOffset > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="content-wrapper">
					<div
						className={`homepage-sticky-logo${
							scrolled ? " scrolled" : ""
						}`}
					>
						<div className="homepage-logo-large">
							<Logo width={80} link={false} />
						</div>
						<div className="homepage-logo-small">
							<Logo width={40} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<div className="homepage-social-icon-wrapper">
								<button
									type="button"
									className="homepage-social-icon homepage-social-icon-button"
									onClick={handleCopyEmail}
									aria-label="Copy email address"
								>
									<FontAwesomeIcon icon={faMailBulk} />
								</button>
								{emailCopied && (
									<span className="homepage-copy-tooltip">
										Email copied!
									</span>
								)}
							</div>

							<a
								href={INFO.main.resume}
								target="_blank"
								rel="noreferrer"
								className="homepage-view-all-button homepage-view-all-button-accent"
							>
								<FontAwesomeIcon icon={faFileLines} /> Resume
							</a>
						</div>

						<div className="homepage-section" id="about">
							<div className="homepage-section-title">
								About Me
							</div>
							<div className="homepage-section-description">
								{INFO.about.description}
							</div>
						</div>

						<div className="homepage-section" id="projects">
							<div className="homepage-section-title">
								Projects
							</div>
							<AllProjects limit={3} />
							<div className="homepage-view-all-container">
								<Link
									to="/projects"
									className="homepage-view-all-button homepage-view-all-button-accent"
								>
									View All Projects{" "}
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faChevronRight}
									/>
								</Link>
							</div>
						</div>

						<div className="homepage-section" id="publications">
							<div className="homepage-section-title">
								Publications
							</div>
							<AllPublications />
						</div>

						<div className="homepage-section" id="experience">
							<div className="homepage-section-title">
								Work Experience
							</div>
							<AllExperience showDescription={false} />
							<div className="homepage-view-all-container">
								<Link
									to="/experience"
									className="homepage-view-all-button homepage-view-all-button-accent"
								>
									More Information{" "}
									<FontAwesomeIcon
										style={{ fontSize: "10px" }}
										icon={faChevronRight}
									/>
								</Link>
							</div>
						</div>

						<div className="homepage-section" id="education">
							<div className="homepage-section-title">
								Education
							</div>
							<Education />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
