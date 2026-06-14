import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
	faMailBulk,
	faFileLines,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.pageYOffset;
			setScrollProgress(Math.min(1, scroll / 100));
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoSize = 80 - scrollProgress * 40;
	const logoTop = 124 - scrollProgress * 100;

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

				<div
					className="homepage-fixed-logo"
					style={{ top: `${logoTop}px` }}
				>
					<div className="content-wrapper">
						<Logo width={logoSize} link={false} />
					</div>
				</div>

				<div className="content-wrapper">
					<div className="homepage-logo-placeholder" />

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
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
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>

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
