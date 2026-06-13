import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/allPublications.css";

const AllPublications = () => {
	return (
		<div className="publications-container">
			{INFO.publications.map((publication, index) => (
				<div className="publication" key={index}>
					<div className="publication-top">
						<div className="publication-title">
							{publication.title}
						</div>
						<div className="publication-date">
							{publication.date}
						</div>
					</div>

					<div className="publication-venue">
						{publication.venue}
					</div>

					<div className="publication-description">
						{publication.description}
					</div>

					{publication.link && (
						<a
							className="publication-link"
							href={publication.link}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLink} /> View Publication
						</a>
					)}
				</div>
			))}
		</div>
	);
};

export default AllPublications;
