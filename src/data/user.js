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

	// Teaser cards for in-progress / undisclosed projects. Shown on the homepage
	// and projects page until details are ready to publish.
	projectTeasers: [
		{
			title: "Discriminator-Free Style Transfer for Humanoid Locomotion (RL)",
			status: "In Progress",
			description:
				"Details coming soon.",
		},

		{
			title: "Hand Retargeting for Teleoperation of a Robotic Arm and Hand",
			status: "In Progress",
			description:
				"Details coming soon.",
		},
	],

	projects: [
		{
			slug: "aristo-hand",
			title: "ARISTO Hand: Sensing-Driven Distal Hyperextension for Fine-Grained Manipulation",
			year: "2026",
			category: "research",
			image: "/projects/aristo-hand-1.jpg",
			overview:
				"PCB design, embedded systems, CAN integration, and control design for the ARISTO hand.",
			website: "https://aristohand.github.io/",
		},

		{
			slug: "humanoid-ft-sensor-integration",
			title: "Humanoid F/T Sensor Integration",
			year: "2025",
			category: "research",
			image: "/projects/humanoid-ft-sensor-1.jpg",
			images: [
				"/projects/humanoid-ft-sensor-1.jpg",
				"/projects/humanoid-ft-sensor-2.jpg",
			],
			overview:
				"Integrated and calibrated four 6-axis force/torque sensors into a humanoid robot's wrists and ankles.",
			description:
				"Integrated four 6-axis force/torque sensors into a humanoid's wrists and ankles, reverse-engineering proprietary amplifier boards and writing the algorithm that interprets contact wrenches in real time.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Integrate four 6-axis Force/Torque (F/T) sensors into the wrists and ankles of a humanoid robot",
					],
				},
				{
					title: "Requirements",
					items: [
						"Must use available F/T sensors: ATI mini40 and mini45",
						"Sensors must read the contact force properly within an error margin",
					],
				},
				{
					title: "Challenges",
					items: [
						"Calibration of each sensor individually and fixing old sensors",
						"Understanding and redesigning amplifier boards for accurate sensor data",
						"Designing a test platform to determine the accuracy of sensor data",
						"Visualizing the force/torque data in multi-contact robot simulations",
					],
				},
				{
					title: "Solutions",
					items: [
						"Understood the hardware architecture and talked to the supplier",
						"Reverse-engineered the existing proprietary boards and designed new amplifiers with a different approach",
						"Designed to isolate and allow two axes of force/torque measurement",
						"Wrote an algorithm that read the analog data and interpreted a single wrench originating from the appropriate contact point, oriented perpendicular to the current contact for a given limb",
					],
				},
				{
					title: "Conclusion",
					items: [
						"Two F/T sensors were successfully integrated into the ankles",
						"Force was correctly read within a margin of error of ~1 lb",
						"Torque was correctly interpreted with a margin of error of ~0.25 Nm",
					],
				},
			],
		},

		{
			slug: "3-dof-articulated-robot-distance-tracking",
			title: "3 DOF Articulated Robot Distance Tracking",
			year: "2025",
			category: "course",
			image: "/projects/dof-tracking-2.png",
			images: [
				"/projects/dof-tracking-2.png",
				"/projects/dof-tracking-1.png",
			],
			overview:
				"A 3D-printed robotic arm that uses inverse kinematics to track an object at a fixed distance.",
			description:
				"A 3D-printed articulated robot that uses inverse kinematics and an ultrasonic sensor to track an object at a fixed distance, with sensor processing handled by an Arduino feeding a PyBullet controller.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Build an articulated robot to track an object at a fixed distance",
					],
				},
				{
					title: "Requirements",
					items: [
						"Must be 3D-printed and lightweight",
						"Must use inverse kinematics for movement and control",
					],
				},
				{
					title: "Challenges",
					items: [
						"Calculating forward and inverse kinematics for the robot's kinematics",
						"Integrating an ultrasonic sensor with the existing Windows/PyBullet environment",
						"Developing an algorithm that incorporates data from the sensor to update the controller",
					],
				},
				{
					title: "Solutions",
					items: [
						"Used the Rodrigues rotation formula, which simplifies well for the articulated configuration, to calculate inverse kinematics",
						"Used an Arduino to interface USB directly to the onboard serial, allowing the ultrasonic sensor processing to happen externally to the PyBullet controller",
						"Used relative limits and inverse kinematics to predict desired positions based on object distance",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The object maintains a desired distance up to a speed of ~5 mph",
					],
				},
			],
		},

		{
			slug: "tron-handheld-arcade-console",
			title: "Tron Handheld Arcade Console",
			year: "2024",
			category: "course",
			image: "/projects/tron-console-1.jpg",
			images: ["/projects/tron-console-1.jpg"],
			overview:
				"A handheld recreation of Tron's Lightbike game, with local and wireless infrared co-op.",
			description:
				"A handheld recreation of Tron's Lightbike minigame on a custom PCB built around the TI MSPM0, with local and infrared wireless co-op driven by a hand-written finite state machine.",
			sections: [
				{
					title: "Purpose",
					items: ["Recreate the Lightbike minigame from the Tron arcade game"],
				},
				{
					title: "Requirements",
					items: [
						"Must use the TI MSPM0 microcontroller",
						"Must use potentiometers in at least 2 dimensions",
						"Must use a finite state machine that describes the states for the entire game",
					],
				},
				{
					title: "Challenges",
					items: [
						"Creating a platform on which to play the game",
						"Interface microcontroller with external devices",
						"Must offer at least two language options",
						"Allow multiple players",
					],
				},
				{
					title: "Solutions",
					items: [
						"Designed a custom PCB that allows mounting of all external devices and the microcontroller",
						"Developed hardware drivers in C/C++ and ARM assembly for all external devices including potentiometers, LCD screen, buttons, speaker, and IR sensor/receiver",
						"Developed two options for players to play together: local co-op and remote co-op using infrared",
						"Transferred position of bikes data between microcontrollers using infrared communication",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The wireless game updated the positions of the Lightbikes at 15 Hz",
						"Collisions can be improved by running the local device at a higher frequency and implementing predictive movement",
						"Feedback from the community suggests that the game runs smoothly and has an attractive user interface",
						"To improve user experience, a case can be made that resembles a traditional controller or handheld console",
					],
				},
			],
		},

		{
			slug: "indoor-positioning-computer-vision",
			title: "Indoor Positioning With Computer Vision and Linear Transformations",
			year: "2022",
			category: "course",
			image: "/projects/indoor-positioning-1.jpg",
			images: ["/projects/indoor-positioning-1.jpg"],
			overview:
				"A camera-based indoor positioning system for a low-cost delivery robot, using ceiling anchor points and OpenCV.",
			description:
				"A camera-based indoor localization system for a low-cost delivery robot (Sidd), using colored ceiling anchor points, OpenCV centroid tracking, and linear transformations to estimate position and orientation.",
			intro:
				"This system is part of my Short Indoor Distance Delivery (Sidd) Robot project. After noticing that local restaurants and cafes struggled to remain open during the pandemic, Sidd was designed to bring a customer their food or beverage while avoiding close-proximity contact between staff and guests, with potential to expand to similar use cases like delivering medication in hospitals. While industry delivery robots already exist, the goal of Sidd is to provide an affordable alternative for local business owners.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Create a system that can be easily mounted on a robot allowing it to accurately locate itself in a room",
					],
				},
				{
					title: "Requirements",
					items: [
						"Must be cost effective",
						"Accuracy of position: >10cm",
						"Accuracy of rotation: >5 degrees",
						"Small physical footprint",
						"Accessible power source",
					],
				},
				{
					title: "Challenges",
					items: [
						"Existing solutions are not cost effective",
						"Design a system to represent position data for static objects within a room that are always visible",
						"Creating the mathematical model for the anchor points",
						"Interpreting the results of the model",
					],
				},
				{
					title: "Solutions",
					items: [
						"Using public university resources and the IEEE database, researched different indoor localization methods and compared their costs, complexity, and benefits",
						"Used a vertical camera facing colored anchor points on the ceiling",
						"Used colored circles taped to the ceiling to be easily replaceable and OpenCV to track their centroids",
						"Compared the centroid of the anchor points' shape (a square) with the result of matrix inversion on the location data, then adjusted in real time by tracking the centroids to account for the robot's angle relative to the anchor points",
						"Predicted the location of the four points and minimized the error relative to the camera's frame using the output of the mathematical model",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The positioning has an accuracy of ~5cm. When rotation is added, the accuracy decreases to ~10cm with an angle accuracy of ~5 degrees",
						"Accuracy can be improved by increasing the pixel density of the image, reducing the camera's angular field of view, or mathematically flattening the image to prevent warping from interfering with the data",
						"Accuracy might also improve by adding points and using an overdetermined system",
						"The next step is to expand recognition of anchor points to accept a recurring pattern, letting the robot operate in larger rooms",
					],
				},
			],
		},

		{
			slug: "first-tech-challenge-2023",
			title: "FIRST Tech Challenge - 2023",
			year: "2023",
			category: "course",
			image: "/projects/ftc-2023-1.jpg",
			images: ["/projects/ftc-2023-1.jpg", "/projects/ftc-2023-2.jpg"],
			overview:
				"A mecanum-drive competition robot with PID-controlled odometry and an automated lift.",
			description:
				"A mecanum-drive competition robot for FIRST Tech Challenge's Power Play season, with PID-controlled odometry and a linear-slider lift coordinated through a finite state machine.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Design and build a competitive robot for FIRST Tech Challenge 2023 Power Play",
					],
				},
				{
					title: "Requirements",
					items: [
						"Pick up and manipulate 4'' by 5'' cones",
						"Place cones accurately around poles at different heights not exceeding 33.5''",
						"Follow the part, game, and robot constraints of the Power Play game manual",
					],
				},
				{
					title: "Challenges",
					items: [
						"Design a chassis capable of withstanding the instability of depositing cones",
						"Implement odometry and PID control to achieve consistent autonomous movement around the playing field",
						"Consistently deposit cones at specific heights while moving the robot accurately",
					],
				},
				{
					title: "Solutions",
					items: [
						"Used a long mecanum drive with a center of gravity close to the ground and added 2 kg of additional mass",
						"Used RoadRunner's mecanum setup and MeepMeep movement visualization to create, model, and implement routes for the autonomous portion of the game",
						"Created a PID system for vertical linear sliders to move the end effector to desired heights",
						"Used finite state machine coding to simultaneously run the drivetrain and the lift mechanism",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The robot is able to complete all scoring actions, depositing cones at each needed height while maneuvering the field and performing arm and lift movements",
						"The autonomous accuracy of the PID odometry is ~1'' for chains of individual movements, and ~2'' for chains of spline movements",
						"The lift raises the cones to heights with an accuracy of ~1cm",
						"The robot is able to score all cones available in a given game alone",
					],
				},
			],
		},

		{
			slug: "first-tech-challenge-2022",
			title: "FIRST Tech Challenge - 2022",
			year: "2022",
			category: "course",
			image: "/projects/ftc-2022-1.jpg",
			images: ["/projects/ftc-2022-1.jpg"],
			overview:
				"A competition robot for FIRST Tech Challenge, where I led construction, CAD, and the intake subsystem.",
			description:
				"A competition robot for FIRST Tech Challenge's Freight Frenzy season — led construction, CAD, and the intake subsystem, and coached the team through the South Texas Regional Championship.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Design and build a competitive robot for FIRST Tech Challenge 2022 Freight Frenzy",
					],
				},
				{
					title: "Requirements",
					items: [
						"Pick up and move freight: 2'' cubes weighing up to 135.4 g, 2.75'' spheres weighing 33.5 g, and 15.8 g rubber ducks",
						"Deliver the freight to different set heights not exceeding 14.75''",
						"Spin a carousel located 1'' above the outside barrier",
						"Follow the part, game, and robot constraints of the Freight Frenzy game manual",
					],
				},
				{
					title: "Challenges",
					items: [
						"Learning to interface different systems",
						"Consistently repeating movements",
						"Transitioned into in-person play after being online for most of the season",
					],
				},
				{
					title: "Solutions",
					items: [
						"Divided the work into subsystems according to how much manpower was required and focused the robot design on easy access for maintenance",
						"Used motor \"ticks\" (feedback from REV DC-motor encoders) to control movements",
					],
				},
				{
					title: "Conclusion",
					items: [
						"My role was overseeing the construction and design of the robot, CADing all designs, designing and embodying the intake system, and acting as coach during matches",
						"The robot performed well in online play, for which it had been designed, but struggled with 3 more robots on the field and the addition of the shared hub at the South Texas Regional Championship",
						"The lack of feedback and control on the robot caused inconsistent performances",
					],
				},
			],
		},

		{
			slug: "pacman-genetic-algorithm",
			title: "Pacman Genetic Algorithm",
			year: "2023",
			category: "course",
			image: "/projects/pacman-genetic-1.png",
			images: ["/projects/pacman-genetic-1.png"],
			overview:
				"A from-scratch Pacman with search-based ghosts and a genetic algorithm that learns to play.",
			description:
				"A from-scratch Pacman built in pygame, extended with A*/UCS/Greedy/BFS ghost search, a simulated-annealing solver for the traveling salesman problem, and a tunable genetic algorithm that learns Pacman's scoring path.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Create a Pacman game using Python with ghosts that follow search algorithms (A*, UCS, Greedy, BFS)",
						"Solve the traveling salesman problem using Pacman, 10 random pellets on the field, and simulated annealing",
						"Create a genetic algorithm that determines the path Pacman should take to score the most points",
					],
				},
				{
					title: "Requirements",
					items: [
						"Must use pygame",
						"Must have a fully functional Pacman game with teleporting and power-up pellets",
						"All search algorithms must be properly implemented without edge errors",
						"Both simulated annealing and the genetic algorithm must have tuneable constants",
					],
				},
				{
					title: "Challenges",
					items: [
						"Learning pygame",
						"Adding learning algorithms onto an existing game",
						"Getting consistently improving results from the genetic algorithm over time",
					],
				},
				{
					title: "Solutions",
					items: [
						"Removed all objects from their respective game display so a game could run completely without graphics, crucial for the genetic algorithm",
						"Extensively tuned constants to get an improvement curve for the genetic algorithm",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The Pacman game works with all edge cases (e.g. reaching the ends of the map, teleporters, and spawning). The ghosts are very advanced, making it almost impossible to collect all pellets in a single life",
						"Simulated annealing significantly improves on the initial random solution to the traveling salesman problem, but is not the right algorithm if a consistently optimal solution is required",
						"The genetic algorithm works as intended with 9 tunable constants, reaching a point plateau around 40 pellets eaten unless a power pellet lets Pacman eat a ghost",
						"The genetic algorithm still has room for optimization, as a large percentage of Pacman's movements are wasted (e.g. backtracking to an already-cleared path)",
					],
				},
			],
		},

		{
			slug: "pid-balance-beam",
			title: "PID Balance Beam",
			year: "2021",
			category: "course",
			image: "/projects/pid-balance-beam-1.png",
			images: ["/projects/pid-balance-beam-1.png"],
			overview:
				"A servo-actuated beam that balances a rolling ball using a tuned PID controller, built for under $6.",
			description:
				"A servo-actuated balance beam that centers a rolling ball using a tuned PID controller and an ultrasonic sensor, built for under $6 in non-lab materials.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Design a track that balances a ball in the center using a Proportional, Integral, Derivative (PID) corrective algorithm",
						"Materials given: a servo motor, access to lab materials, and other cost-efficient materials such as foam board, balsa wood, PLA, string, and a pulley system",
					],
				},
				{
					title: "Requirements",
					items: [
						"Track that balances a ball in the center",
						"Easy to understand building instructions",
						"Low cost design",
						"Develop PID software",
						"Use a servo motor to control the beam",
					],
				},
				{
					title: "Challenges",
					items: [
						"Minimizing flex in the beam",
						"Receiving accurate readings from the ultrasonic sensor",
						"Limiting motion to a 2D plane",
					],
				},
				{
					title: "Solutions",
					items: [
						"3D printed thin custom end caps that tightly fit thin metal rods, with a third metal rod on top of the ball for structural support",
						"Enclosed the track in a plastic tube to channel ultrasonic waves",
						"Used two hinges to hold the track",
					],
				},
				{
					title: "Conclusion",
					items: [
						"The ball balances in the center of the track independent of starting position",
						"With empirically tuned PID constants, balance time averaged 5 s, with a best time of 3 s",
						"Total cost of production (non-lab materials) was $5.90",
					],
				},
			],
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
			website: "https://aristohand.github.io/",
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
				},
			],
		},
	],
};

export default INFO;
