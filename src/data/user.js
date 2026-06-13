const INFO = {
	main: {
		title: "Portfolio",
		name: "Mark Helwig",
		email: "helwig.l.mark@gmail.com",
		logo: "../logo.png",
		resume: "/resume.pdf",
	},

	socials: {
		github: "https://github.com/mark-helwig",
		linkedin: "https://www.linkedin.com/in/mark-l-helwig/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hi, I'm Mark.",
		description:
			"I'm an undergraduate student at UT Austin studying Electrical and Computer Engineering, focusing on robotics.",
	},

	about: {
		title: "I’m Mark Helwig. I'm based in Austin, Texas, where I build robots and the systems that control them.",
		description:
			"I'm an Electrical and Computer Engineering Honors student at UT Austin, minoring in Robotics. I'm drawn to the intersection of hardware and software -- designing embedded systems, building control loops, and training reinforcement learning policies that run on real robots. I've worked across research labs, startups, and aerospace, and I'm always looking for the next hands-on challenge. When I'm away from the lab, you'll usually find me climbing, cooking, or exploring new restaurants.",
	},

	publicationsPage: {
		title: "A collection of my publications, papers, and other written work.",
		description:
			"Research I've contributed to in robotics and manipulation, including peer-reviewed papers and preprints.",
	},

	experiencePage: {
		title: "A timeline of where I've worked and what I've learned along the way.",
		description:
			"From robotics research to aerospace and startup engineering teams -- a timeline of where I've worked and what I've built along the way.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],

	publications: [
		{
			title: "ARISTO Hand: Sensing-Driven Distal Hyperextension for Fine-Grained Manipulation",
			venue: "arXiv preprint (arXiv:2605.30508)",
			date: "2026",
			description:
				"Introduces a tendon-driven robotic hand combining active distal hyperextension with hybrid fingertip sensing -- a rigid nail-mounted force-torque sensor paired with a soft capacitive tactile array -- achieving a 2.76x increase in pull-out force on thin objects while preserving standard grasp performance. With A. Kim, D.H. Kang, M. Seo, K. Yokoyama, T. Narita, and L. Sentis.",
			link: "https://arxiv.org/abs/2605.30508",
		},
	],

	experience: [
		{
			img: "./personaai_dark.jpg",
			role: "Locomotion Engineering Intern",
			company: "Persona AI",
			date: "May 2026 - Present",
			desc:
				"Engineering behaviors across multiple humanoid hardware platforms using Nvidia's IsaacLab, and developing a pipeline for logging and processing hardware and simulation data.",
		},

		{
			img: "./hcrl.png",
			role: "Researcher",
			company: "Human Centered Robotics Group",
			date: "Sep 2024 - Present",
			desc:
				"Researching discriminator-free style transfer for expressive locomotion in humanoids and quadrupeds using RL in IsaacLab to deploy on hardware. Developing a custom retargeting algorithm for teleoperation of a robotic arm and hand, rudimentary whole-body locomanipulation for the Unitree G1, embedded systems (CAN hardware/firmware, ROS2, impedance control) for an imitation-learning-controlled robotic hand, and 6-axis force/torque sensing in humanoid limbs for multi-contact planning.",
		},

		{
			img: "./lockheed.png",
			role: "Systems Engineering Intern",
			company: "Lockheed Martin Aeronautics",
			date: "May 2025 - Aug 2025",
			desc:
				"Developed and owned a Python app for automation of sustainment engineering interpretation of F-35 flight data across all Mission System subsystems, improving process workflow by 92%. Created, maintained, and documented a codebase combining a GUI, automated database interaction (SQL), and automated data visualization.",
		},

		{
			img: "./pike_robotics_logo.jpg",
			role: "Electrical Engineer",
			company: "Pike Robotics",
			date: "Sep 2023 - Sep 2024",
			desc:
				"Worked independently to design and validate an autonomous embedded system that manages an umbilical line and communicates with a host robot in an oil storage tank environment. Designed and implemented the main power distribution PCB at 250W, meeting UL60950-1 electrical safety standards under UL 1203 C1D1 explosion-proof conditions.",
		},
	],

	education: [
		{
			img: "./utaustin.webp",
			school: "The University of Texas at Austin",
			degrees: [
				{
					degree: "B.S. in Electrical and Computer Engineering (Honors), Minor in Robotics",
					date: "Fall 2023 - Expected May 2027",
					gpa: "3.88/4.0",
					coursework:
						"Real-Time Digital Signal Processing, Aerial Robotics, Robot Mechanism Design, Automatic Control",
					desc:
						"Honors student focused on robotics, control systems, and modeling, with hands-on experience in embedded systems, mechatronics, and reinforcement learning research on humanoid and quadruped locomotion.",
				},
			],
		},
	],
};

export default INFO;
