import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const {
		slug,
		title,
		year,
		image,
		overview,
		description,
		teaser,
		status,
		website,
	} = props;

	const cardText = overview || description;

	const cardClassName = teaser ? "project-card project-card-teaser" : "project-card";

	const content = (
		<div className={cardClassName}>
			{!teaser && (
				<React.Fragment>
					<div
						className="project-card-image"
						style={{ backgroundImage: `url(${image})` }}
					/>
					<div className="project-card-scrim" />
				</React.Fragment>
			)}

			<div className="project-card-overlay">
				{teaser && status && (
					<div className="project-card-status">{status}</div>
				)}
				{year && <div className="project-card-year">{year}</div>}
				<div className="project-card-title">{title}</div>
				<div className="project-card-description">{cardText}</div>
			</div>
		</div>
	);

	if (teaser) {
		return content;
	}

	if (website) {
		return (
			<a
				href={website}
				target="_blank"
				rel="noreferrer"
				className="project-card-link"
			>
				{content}
			</a>
		);
	}

	return (
		<Link to={`/projects/${slug}`} className="project-card-link">
			{content}
		</Link>
	);
};

export default Project;
