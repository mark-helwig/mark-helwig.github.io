import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import INFO from "../data/user";

import "./styles/experienceDetail.css";

const ExperienceDetail = () => {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const experience = INFO.experience.find((item) => item.slug === slug);

	if (!experience) {
		return <Notfound />;
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${experience.role} at ${experience.company} | ${INFO.main.title}`}</title>
				<meta name="description" content={experience.desc} />
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-detail-logo-container">
						<div className="experience-detail-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experience-detail-container">
						<Link to="/experience" className="experience-detail-back">
							&larr; Back to experience
						</Link>

						<div className="experience-detail-header">
							<div className="experience-detail-date">
								{experience.date}
							</div>
							<div className="title experience-detail-title">
								{experience.role}
							</div>
							<div className="subtitle experience-detail-company">
								{experience.company}
							</div>

							{experience.website && (
								<a
									href={experience.website}
									target="_blank"
									rel="noreferrer"
									className="experience-detail-website-button"
								>
									Visit Website{" "}
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
										style={{ fontSize: "12px" }}
									/>
								</a>
							)}
						</div>

						{experience.image && (
							<div className="experience-detail-hero">
								<img
									src={experience.image}
									alt={experience.company}
								/>
							</div>
						)}

						{experience.sections && (
							<div className="experience-detail-sections">
								{experience.sections.map((section, index) => (
									<div
										className="experience-detail-section"
										key={index}
									>
										{section.title && (
											<div className="experience-detail-section-title">
												{section.title}
											</div>
										)}
										<div className="experience-detail-description">
											{section.description}
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ExperienceDetail;
