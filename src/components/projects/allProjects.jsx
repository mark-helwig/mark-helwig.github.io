import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { limit, category } = props;

	let items;

	if (category === "teaser") {
		items = INFO.projectTeasers.map((teaser) => ({
			...teaser,
			teaser: true,
		}));
	} else if (category) {
		items = INFO.projects.filter((project) => project.category === category);
	} else {
		const teasers = INFO.projectTeasers.map((teaser) => ({
			...teaser,
			teaser: true,
		}));

		items = [...teasers, ...INFO.projects];
	}

	if (limit) {
		items = items.slice(0, limit);
	}

	return (
		<div className="all-projects-container">
			{items.map((item, index) => (
				<div className="all-projects-project" key={item.slug || `teaser-${index}`}>
					<Project {...item} />
				</div>
			))}
		</div>
	);
};

export default AllProjects;
