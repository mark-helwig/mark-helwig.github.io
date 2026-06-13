import React from "react";

import INFO from "../../data/user";

import "../common/styles/education.css";

const Education = () => {
	return (
		<div className="education-container">
			{INFO.education.map((education, index) => (
				<div className="education-item" key={index}>
					<div className="education-logo">
						<img
							src={education.img}
							alt={education.school}
							className="education-logo-image"
						/>
					</div>

					<div className="education-content">
						<div className="education-school">
							{education.school}
						</div>

						{education.degrees.map((degree, degreeIndex) => (
							<div className="education-degree" key={degreeIndex}>
								<div className="education-degree-header">
									<div className="education-degree-title">
										{degree.degree}
									</div>
									<div className="education-degree-date">
										{degree.date}
									</div>
								</div>

								{degree.gpa && (
									<div className="education-degree-detail">
										GPA: {degree.gpa}
									</div>
								)}

								{degree.coursework && (
									<div className="education-degree-detail">
										Relevant Coursework: {degree.coursework}
									</div>
								)}

								{degree.desc && (
									<div className="education-degree-detail">
										{degree.desc}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
