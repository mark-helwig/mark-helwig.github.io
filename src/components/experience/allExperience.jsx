import React from "react";

import INFO from "../../data/user";

import "../common/styles/timeline.css";

const AllExperience = ({ showDescription = true }) => {
	return (
		<div className="timeline-container">
			{INFO.experience.map((experience, index) => (
				<div className="timeline-item" key={index}>
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

							<div className="timeline-date">{experience.date}</div>
						</div>

						{showDescription && (
							<div className="timeline-description">
								{experience.desc}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default AllExperience;
