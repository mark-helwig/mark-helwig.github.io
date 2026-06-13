import React from "react";

import INFO from "../../data/user";

import "../common/styles/timeline.css";

const Education = () => {
	return (
		<div className="timeline-container">
			{INFO.education.map((education, index) => (
				<div className="timeline-item" key={index}>
					<div className="timeline-logo">
						<img
							src={education.img}
							alt={education.school}
							className="timeline-logo-image"
						/>
					</div>

					<div className="timeline-info">
						<div className="timeline-top">
							<div className="timeline-title">
								{education.degree}
							</div>
							<div className="timeline-subtitle">
								{education.school}
							</div>
						</div>

						<div className="timeline-date">{education.date}</div>

						<div className="timeline-description">
							{education.desc}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
