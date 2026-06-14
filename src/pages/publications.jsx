import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllPublications from "../components/publications/allPublications";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/publications.css";

const Publications = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "publications");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Publications | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="publications" />
				<div className="content-wrapper">
					<div className="publications-logo-container">
						<div className="publications-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="publications-page-container">
						<div className="title publications-title">
							{INFO.publicationsPage.title}
						</div>

						<div className="publications-list">
							<AllPublications />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Publications;
