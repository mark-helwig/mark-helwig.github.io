import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/education.css";

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
				<div className="content-wrapper">
					<div className="education-page-logo-container">
						<div className="education-page-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="education-page-container">
						<div className="title education-page-title">
							{INFO.educationPage.title}
						</div>

						{INFO.education.map((edu, index) => (
							<div className="education-page-school" key={index}>
								<div className="education-page-school-header">
									<img
										src={edu.img}
										alt={edu.school}
										className="education-page-school-logo-image"
									/>
									<div className="education-page-school-info">
										<div className="education-page-school-name">
											{edu.school}
										</div>
										{edu.degrees.map((degree, degreeIndex) => (
											<div
												className="education-page-degree"
												key={degreeIndex}
											>
												<div className="education-page-degree-header">
													<div className="education-page-degree-title">
														{degree.degree}
													</div>
													<div className="education-page-degree-date">
														{degree.date}
													</div>
												</div>
												{degree.gpa && (
													<div className="education-page-degree-detail">
														GPA: {degree.gpa}
													</div>
												)}
											</div>
										))}
									</div>
								</div>

								{edu.courseTopics && (
									<div className="education-page-courses">
										<div className="education-page-courses-heading">
											Coursework
										</div>
										<div className="education-page-topics-grid">
											{edu.courseTopics.map(
												(topic, topicIndex) => (
													<div
														className="education-page-topic"
														key={topicIndex}
													>
														<div className="education-page-topic-name">
															{topic.topic}
														</div>
														<ul className="education-page-course-list">
															{topic.courses.map(
																(course, courseIndex) => (
																	<li
																		className="education-page-course-item"
																		key={courseIndex}
																	>
																		<span className="education-page-course-code">
																			{course.code}
																		</span>
																		<span className="education-page-course-name">
																			{course.name}
																		</span>
																	</li>
																)
															)}
														</ul>
													</div>
												)
											)}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Education;
