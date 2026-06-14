import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Experience from "./pages/experience";
import ExperienceDetail from "./pages/experienceDetail";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/projectDetail";
import Publications from "./pages/publications";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/experience" element={<Experience />} />
				<Route
					path="/experience/:slug"
					element={<ExperienceDetail />}
				/>
				<Route path="/projects" element={<Projects />} />
				<Route
					path="/projects/:slug"
					element={<ProjectDetail />}
				/>
				<Route path="/publications" element={<Publications />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
