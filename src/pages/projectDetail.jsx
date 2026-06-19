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

import "./styles/projectDetail.css";

const ProjectDetail = () => {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const project = INFO.projects.find((item) => item.slug === slug);

	if (!project) {
		return <Notfound />;
	}

	const sectionImages = project.sections
		? project.sections.flatMap((s) => s.images || [])
		: [];

	const galleryImages = project.images
		? project.images.filter(
				(image) => image !== project.image && !sectionImages.includes(image)
		  )
		: [];

	const galleryVideos = project.videos
		? project.videos.filter((video) => video !== project.video)
		: [];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="project-detail-logo-container">
						<div className="project-detail-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="project-detail-container">
						<Link to="/projects" className="project-detail-back">
							&larr; Back to projects
						</Link>

						<div className="project-detail-header">
							{project.year && (
								<div className="project-detail-year">
									{project.year}
								</div>
							)}
							<div className="project-detail-title">
								{project.title}
							</div>
							<div className="project-detail-description">
								{project.description}
							</div>
							{project.intro && (
								<div className="project-detail-intro">
									{project.intro}
								</div>
							)}

							{(project.website || project.fullReports) && (
								<div className="project-detail-actions">
									{project.website && (
										<a
											href={project.website}
											target="_blank"
											rel="noreferrer"
											className="project-detail-website-button"
										>
											Visit Website{" "}
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												style={{ fontSize: "12px" }}
											/>
										</a>
									)}

									{project.fullReports && (
										<a
											href={project.fullReports}
											target="_blank"
											rel="noreferrer"
											className="project-detail-website-button"
										>
											Full Reports{" "}
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												style={{ fontSize: "12px" }}
											/>
										</a>
									)}
								</div>
							)}
						</div>

						{project.video ? (
							<div className="project-detail-hero">
								<video
									src={project.video}
									controls
									autoPlay
									muted
									loop
									playsInline
								/>
							</div>
						) : (
							project.image && (
								<div className="project-detail-hero">
									<img
										src={project.image}
										alt={project.title}
									/>
								</div>
							)
						)}

						<div className="project-detail-sections">
							{project.sections.map((section, index) => (
								<div
									className="project-detail-section"
									key={index}
								>
									<div className="project-detail-section-title">
										{section.title}
									</div>
									<ul className="project-detail-section-list">
										{section.items.map(
											(item, itemIndex) => (
												<li key={itemIndex}>{item}</li>
											)
										)}
									</ul>
									{section.images && section.images.length > 0 && (
										<div className="project-detail-section-images">
											{section.images.map((image, i) => (
												<img
													key={i}
													className="project-detail-section-image"
													src={image}
													alt={section.title}
												/>
											))}
										</div>
									)}
								</div>
							))}
						</div>

						{(galleryImages.length > 0 || galleryVideos.length > 0) && (
							<div className="project-detail-gallery">
								{galleryImages.map((image, index) => (
									<img
										className="project-detail-gallery-image"
										key={index}
										src={image}
										alt={project.title}
									/>
								))}
								{galleryVideos.map((video, index) => (
									<video
										className="project-detail-gallery-video"
										key={index}
										src={video}
										controls
										muted
										loop
										playsInline
									/>
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

export default ProjectDetail;
