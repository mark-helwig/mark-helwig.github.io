import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "../common/styles/timeline.css";

const AllExperience = ({ showDescription = true }) => {
	return (
		<div className="timeline-container">
			{INFO.experience.map((experience, index) => {
				const item = (
					<div className="timeline-item">
						<div className="timeline-logo">
							<img
								src={experience.img}
								alt={experience.company}
								className="timeline-logo-image"
							/>
						</div>

						<div className="timeline-info">
							<div className="timeline-top">
								<div className="timeline-top-left">
									<div className="timeline-title">
										{experience.company}
									</div>
									<div className="timeline-subtitle">
										{experience.role}
									</div>
								</div>

								<div className="timeline-date">
									{experience.date}
								</div>
							</div>

							{showDescription && (
								<div className="timeline-description">
									{experience.desc}
								</div>
							)}
						</div>
					</div>
				);

				if (experience.slug) {
					return (
						<Link
							to={`/experience/${experience.slug}`}
							className="timeline-item-link"
							key={index}
						>
							{item}
						</Link>
					);
				}

				return <React.Fragment key={index}>{item}</React.Fragment>;
			})}
		</div>
	);
};

export default AllExperience;
