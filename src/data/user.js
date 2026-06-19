const INFO = {
	main: {
		title: "Mark Helwig",
		name: "Mark Helwig",
		email: "helwig.l.mark@gmail.com",
		logo: "../logo.png",
		resume: "/resume.pdf",
	},

	socials: {
		github: "https://github.com/mark-helwig",
		linkedin: "https://www.linkedin.com/in/mark-l-helwig/",
		scholar: "https://scholar.google.com/citations?user=xF5MjpYAAAAJ&hl=en&oi=ao",
	},

	homepage: {
		title: "Hi, I'm Mark",
		description:
			"I'm an undergraduate student at UT Austin studying Electrical and Computer Engineering, focusing on robotics.",
	},

	about: {
		title: "I’m Mark Helwig. I'm based in Austin, Texas, where I build robots and the systems that control them.",
		description: [
			"I'm Mark Helwig, an Electrical and Computer Engineering Honors student at UT Austin, minoring in Robotics, and based in Austin, Texas, where I build robots and the systems that control them. I conduct research at the Human Centered Robotics Lab, under the guidance of Dr. Luis Sentis, and I'm currently a Locomotion Engineering Intern at Persona AI, where Dr. Conner Herron and Dr. AJ Miller guide priorities in Dr. Jerry Pratt's locomotion team.",
			"I'm drawn to the intersection of hardware and software -- designing the embedded systems and control loops that let a robot sense the world, then training the reinforcement learning policies that decide what it does next. Recently, that involves teaching humanoid and quadruped robots to move more expressively through style-transfer RL, building a retargeting pipeline so a robotic hand can mirror a human teleoperator, and integrating 6-axis force/torque sensors so robots can detect and respond to contact rather than ignoring it.",
			"In addition to humanoids, I spent a summer at Lockheed Martin Aeronautics automating F-35 flight data analysis, and a year at Pike Robotics designing the embedded systems and power electronics for an autonomous robot that lives inside oil storage tanks. In my spare time I've also built a Tron-themed handheld arcade console, taught a genetic algorithm to play Pacman, and built and tuned more PID controllers than I can count.",
			"When I'm not in the lab, you'll usually find me climbing, cooking something ambitious (results vary), working through guitar chords, or hunting down the best dessert in Austin.",
		],
	},

	publicationsPage: {
		title: "Publications",
		description:
			"Research I've contributed to in robotics and manipulation, including peer-reviewed papers and preprints.",
	},

	experiencePage: {
		title: "Where I worked and what I learned",
		description:
			"From robotics research to aerospace and startup engineering teams -- a timeline of where I've worked and what I've built along the way.",
	},

	educationPage: {
		title: "My coursework at UT Austin",
		description:
			"Undergraduate study in electrical and computer engineering, with a focus on robotics, signal processing, and control systems.",
	},

	// Teaser cards for in-progress / undisclosed projects. Shown on the homepage
	// and projects page until details are ready to publish.
	projectTeasers: [
		{
			title: "Discriminator-Free Style Transfer for Humanoid Locomotion (RL)",
			status: "In Progress",
			description:
				"Training a Unitree G1 in IsaacLab to walk with a distinct style, and to carry that style onto new terrain -- like a slope -- without retraining for new rewards. I'm building the full pipeline myself: pretraining models, running the RL sims, and testing different model/algorithm combinations.",
		},

		{
			title: "Hand Retargeting for Teleoperation of a Robotic Arm and Hand",
			status: "In Progress",
			description:
				"Building a live teleoperation pipeline that senses how a human bends their fingers and retargets that motion -- including hyperextension -- onto the ARISTO hand. I'm exploring two approaches in parallel: camera-based hand-pose estimation and a motion-capture glove, with early, noisy results from the vision pipeline so far.",
		},
	],

	projects: [
		{
			slug: "aristo-hand",
			title: "ARISTO Hand",
			year: "2026",
			category: "research",
			image: "/projects/aristo-hand-1.jpg",
			images: [
				"/projects/aristo-hand-1.jpg",
				"/projects/aristo-hand-2.jpg",
				"/projects/aristo-hand-3.jpg",
			],
			overview:
				"PCB design, embedded systems, CAN integration, and control design for the ARISTO hand.",
			description:
				"Designed the power and communication electronics for ARISTO, a three-fingered hand that feels contact through fingernail-mounted force/torque sensors and tactile fingertips, and hyperextends its fingers to grip objects as thin as an SD card.",
			intro:
				"ARISTO is a sensorized hand my lab built for fine-grained manipulation -- mini F/T sensors behind each fingernail and tactile sensors in the fingertips let it feel contact forces and surface pressure, while its fingers can hyperextend nearly parallel to grip very thin objects. My contribution was the hand's power and communication electronics: the PCB that drives its eight motors and the CAN/ROS2 software that connects them to the rest of the control stack.",
			website: "https://aristohand.github.io/",
			sections: [
				{
					title: "Purpose",
					items: [
						"Build the power and communication hardware that lets ARISTO's eight motors move, and that exposes its fingernail F/T sensors and tactile fingertips to the rest of the system",
					],
				},
				{
					title: "Requirements",
					items: [
						"Drive all eight hand motors (24V, ~1.5A stall current each) from a single board",
						"Fit entirely inside the hand's housing -- about 3 square inches of usable board space",
						"Give ROS2 a way to talk directly to each motor's low-level firmware over CAN",
					],
				},
				{
					title: "Challenges",
					items: [
						"Packaging power delivery and CAN communication for 8 motors onto a ~3 in² board",
						"No existing driver let ROS2 communicate directly with the motors' low-level firmware",
						"Integrating that new communication layer into ARISTO's existing ROS2 control architecture without disrupting it",
					],
				},
				{
					title: "Solutions",
					items: [
						"Designed and iterated on a compact PCB that distributes 24V power and CAN communication to all eight motors",
						"Wrote a PCAN-based driver that lets ROS2 talk directly to each motor's low-level firmware over CAN",
						"Integrated the driver into ARISTO's ROS2 stack as its motor communication layer",
						"Took the board through a major redesign focused on packaging and power density once the first layouts couldn't fit the housing",
					],
				},
				{
					title: "Conclusion",
					items: [
						"After the redesign, the board reliably powers and commands all eight motors through ROS2",
						"Seeing the hand move under its own control for the first time, after months of PCB and firmware work, was the project's biggest milestone",
						"This work is part of the ARISTO Hand paper, which is headed to a conference",
					],
				},
			],
		},

		{
			slug: "g1-whole-body-locomanipulation",
			title: "Curriculum Driven RL for Whole-Body Locomanipulation on a Humanoid",
			year: "2026",
			category: "research",
			video: "/projects/locomanipulation_1.webm",
			videos: [
				"/projects/locomanipulation_1.webm",
				"/projects/locomanipulation_2.webm",
			],
			overview:
				"RL training and sim2sim transfer for a Unitree G1 that learns to walk to a table, pick up a box with its arms, and walk again while carrying it.",
			description:
				"Trained a Unitree G1 in IsaacLab to combine locomotion and arm manipulation through a simple, staged curriculum, then validated the policy in a Mujoco sim2sim demo of the robot walking to a table, picking up a box, and carrying it to another table.",
			intro:
				"This whole-body locomanipulation refers to a robot moving its arms independently during locomotion. A Unitree G1 learns to walk up to a table, pick up a box, and carry it to another table. The goal wasn't a polished manipulation pipeline, but a simple training method that could bootstrap this kind of general behavior. I built the RL training pipeline and handled the sim2sim transfer, while a labmate developed the higher-level planner that decides where the robot walks and what it reaches for.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Develop a simple, curriculum-based RL method that lets a humanoid combine locomotion and arm manipulation, as a starting point for more general whole-body behaviors",
						"Demonstrate the approach on a concrete task: walk to a table, pick up a box, and carry it to another table",
					],
				},
				{
					title: "Requirements",
					items: [
						"Train the policy in IsaacLab on a Unitree G1",
						"Policy must locomote at varying speeds while independently positioning its hands within its local workspace",
						"Trained policy must transfer to a Mujoco sim2sim environment for validation",
						"Target objects are large and light, like an empty box -- precision grasping wasn't a goal",
					],
				},
				{
					title: "Challenges",
					items: [
						"Combining locomotion and arm manipulation into a single policy without making the training overly complex",
						"The hand-positioning task is target-based with no force or contact feedback, so manipulation accuracy is inherently coarse",
						"Coordinating with a separate, higher-level planner that issues the walk and reach targets",
						"Confirming the trained policy's behavior held up after sim2sim transfer from IsaacLab to Mujoco",
					],
				},
				{
					title: "Solutions",
					items: [
						"Built a staged curriculum: first taught the policy to walk, then to walk at different speeds, then layered on a hand-positioning task driven by a position target within its reachable workspace",
						"Kept the manipulation objective intentionally simple -- position tracking only -- so it could be learned on top of the existing locomotion policy without retraining from scratch",
						"Owned the RL training pipeline and sim2sim transfer, working alongside a labmate's higher-level planner that issued the walk and reach commands",
					],
				},
				{
					title: "Conclusion",
					items: [
						"Demonstrated the full task in sim2sim: the G1 walks to a table, picks up a box with its arms, and walks again while carrying it",
						"The position-target approach to hand placement reached about 5cm accuracy within the reachable workspace -- enough for large, light objects like the test box",
						"Showed that a simple, staged curriculum is enough to bootstrap whole-body locomanipulation without hand-designed manipulation rewards",
						"A labmate later carried the approach further, verifying it on the Unitree R1 humanoid in simulation",
					],
				},
			],
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
				"Diagnosed, calibrated, and integrated 6-axis force/torque sensors into a humanoid robot's ankles after reverse-engineering its aging amplifier hardware.",
			description:
				"Diagnosed why the lab's aging 6-axis force/torque sensors were noisy or silent, reverse-engineered their proprietary amplifier boards, and integrated two of them into a humanoid's ankles with an algorithm that interprets contact wrenches in real time.",
			intro:
				"This project began as a diagnostic effort: the lab had a set of aging F/T sensors that were either unresponsive or producing corrupted output, and the task was to determine why. Some were broken outright, the amplifier boards needed reverse-engineering, and the sensors were old enough that I had to call the manufacturer directly just to recover their calibration matrices.",
			sections: [
				{
					title: "Purpose",
					items: [
						"Integrate 6-axis Force/Torque (F/T) sensors into a humanoid robot's wrists and ankles to support a multi-contact planning project",
					],
				},
				{
					title: "Requirements",
					items: [
						"Must use the lab's available F/T sensors: ATI mini40 and mini45",
						"Sensors must read the contact force properly within an error margin",
					],
				},
				{
					title: "Challenges",
					items: [
						"Diagnosing why the existing F/T sensors were noisy or not communicating at all, and figuring out which of the old sensors were actually broken",
						"The sensors were old enough that we had to call ATI directly to recover their F/T calibration matrices",
						"Understanding and redesigning amplifier boards for accurate sensor data",
						"Designing a test platform to determine the accuracy of sensor data",
						"Visualizing the force/torque data in multi-contact robot simulations",
					],
				},
				{
					title: "Solutions",
					items: [
						"Called ATI to recover F/T calibration matrices for the aging sensors",
						"Reverse-engineered the existing proprietary amplifier boards and designed new ones with a different approach",
						"Designed the new amplifiers to isolate and read two axes of force/torque each",
						"Wrote an algorithm that read the analog data and interpreted a single wrench originating from the appropriate contact point, oriented perpendicular to the current contact for a given limb",
					],
				},
				{
					title: "Conclusion",
					items: [
						"Two F/T sensors were successfully calibrated and integrated into the ankles",
						"Force was correctly read within a margin of error of ~1 lb, and torque within ~0.25 Nm",
						"The wrist sensors were never completed, as lab priorities shifted to other projects",
						"The original goal was to use this sensing for a multi-contact planning paper on hardware, but other parts of the robot never came together, so the integration itself was never used in that context",
					],
				},
			],
		},

		{
			slug: "aerial-robotics",
			title: "Autonomous Quadrotor Navigation: From Simulation to Competition",
			year: "2026",
			category: "other",
			video: "/projects/aerial-robotics-hero-web.mp4",
			images: ["/projects/aerial-robotics-2.png"],
			overview:
				"Built a complete quadrotor autonomy stack — physics simulator, cascaded PD controller, UKF state estimator, A* path planner, and vision pipeline — then competed on a real drone, placing third out of roughly fifteen teams.",
			description:
				"A semester-long course project in ASE 479W (Aerial Robotics) at UT Austin, building a layered quadrotor autonomy stack in MATLAB and C++ that flew on a custom drone in a live cage competition, earning third place.",
			intro:
				"ASE 479W is the aerial robotics course at UT Austin — one semester to build a complete autonomous flight stack from the physics up, then compete with it on real hardware. The assignment structure was deliberately layered: each lab added one new piece — a dynamics simulator, a closed-loop controller, a UKF state estimator, a path planner, a vision pipeline — and the final tournament gathered a team of three to integrate all of it in C++ and fly it on a custom quadrotor in the lab's flight cage. For the final, I owned the 3D A* implementation and the polynomial trajectory generation engine; my teammates handled the planner architecture and the balloon-detection vision pipeline. The algorithm ran clean on real hardware, and our team placed third out of roughly fifteen.",
			sections: [
				{
					title: "Building the Simulator",
					items: [
						"Built a Newtonian quadrotor dynamics simulator in MATLAB from first principles — position, velocity, rotation matrix, and angular rate all propagated through the governing equations, with configurable rotor speeds and external disturbance inputs",
						"Verified the implementation to 10⁻¹⁵ m error against reference data at every time step",
						"Handled the singularity of the 3-1-2 Euler representation by falling back to Direction Cosine Matrices near ±90°, with a round-trip conversion tested to 10⁻¹² norm difference across randomly sampled attitudes",
						"Extended to high fidelity: added aerodynamic drag (proportional to the cross-section perpendicular to the velocity vector) and modeled each motor as a first-order transfer function with wind-up time and voltage saturation",
						"Open-loop circle test: derived the required rotor speed asymmetry analytically, then refined it with gradient descent — used the convergence curve of the error metric to confirm the optimizer was behaving correctly",
					],
				},
				{
					title: "Closed-Loop Control and Gain Tuning",
					items: [
						"Designed a cascaded PD architecture: an outer trajectory controller tracking desired position and velocity, and an inner attitude controller tracking desired orientation using multiplicative DCM error",
						"The attitude error vector collapses a 3×3 rotation error matrix to three components that correctly represent both the axis and magnitude of the attitude deviation — more compact and unambiguous than Euler angle error",
						"Started gain tuning analytically from the 'Goldilocks' damping ratio (ζ = 1/√2 ≈ 0.707) for a good rise time / overshoot tradeoff, then refined empirically using pseudo-step responses on each isolated axis",
						"Automated multivariate gain tuning with two approaches: Coordinate Descent (one parameter at a time, runs 16 simulations per iteration) and SPSA (random perturbation of all parameters simultaneously, 2 simulations per iteration) — Coordinate Descent converged cleanly; SPSA failed to, because the gains are strongly coupled and random perturbation directions miss the true gradient",
					],
				},
				{
					title: "State Estimation Under Realistic Noise",
					items: [
						"Built simulated sensor models for GNSS (primary antenna position + a constrained baseline vector between two antennas), a pinhole camera (landmark feature vectors projected onto an image plane), and an IMU (accelerometer and rate-gyro with first-order Gauss-Markov drift biases on both)",
						"Solved Wahba's problem via SVD to initialize the attitude estimate from pairs of known vectors — tested over 100 random attitude/vector configurations, max DCM error under 10⁻¹² in every case",
						"Built and integrated an Unscented Kalman Filter running at IMU rate, fusing lower-frequency GNSS and camera updates; Euler error angles kept the 3-1-2 singularity safely out of reach as long as the decimation rate was reasonable",
						"Steady-state position standard deviation across 10 random seeds: 5–10 mm — tight enough that shutting the camera off entirely had no meaningful effect on tracking, because the GNSS baseline vector and gravity vector (inferred from IMU) together kept the state fully observable",
					],
				},
				{
					title: "Path Planning: A* to Polynomial Trajectories",
					items: [
						"Compared DFS, Dijkstra's, and A* with three heuristics (zero, distance-from-start, Euclidean) on 2D obstacle grids — confirmed A* with Euclidean distance is both optimal and faster than Dijkstra's since it explores fewer nodes",
						"Added polynomial trajectory smoothing to convert discrete A* waypoints into dynamically feasible trajectories, explored minimizing different derivative orders (position through snap), and tested how arrival time constraints and waypoint density affect the resulting path shape",
						"Full-stack integration test: ran A* on an obstacle grid, smoothed the result with the polynomial solver, then simulated the drone tracking the trajectory with the Lab 2 cascaded PD controller — tracking error dropped below 10 cm after an initial transient at the start of the path",
					],
				},
				{
					title: "Finding the Balloons",
					items: [
						"Implemented 3D feature localization via structured computing: triangulated landmark positions from two or more camera views using a least-squares formulation that exploits the cross-product property of homogeneous image coordinates — average error under 2.5 cm across 837 randomly generated in-field-of-view test points",
						"Integrated localization into the simulated flight loop; wider image spacing (0.75s) significantly outperformed tight clustering (0.1s) because the larger baseline angle between views improved triangulation geometry",
						"Translated the MATLAB pipeline to C++ and paired it with a balloon-detection algorithm: HSV color masking → morphological opening and closing → contour extraction → geometric shape checks on area, aspect ratio, circularity, solidity, and extent — localization error under 10 cm for both red and blue balloons against known ground truth",
					],
				},
				{
					title: "The Tournament: 3D A*, RANSAC, and Real Hardware",
					items: [
						"Extended A* to 3D voxels with 26-neighbor connectivity, 0.3 m grid resolution, and 0.7 m obstacle inflation — with fallback inflation tiers for maps dense enough to block all paths at the conservative margin",
						"Added Ramer-Douglas-Peucker pruning to reduce the staircase-heavy A* output to a cleaner waypoint sequence, then used P4 polynomial trajectory generation with greedy bisection-based timing optimization to minimize flight time on each segment",
						"Applied RANSAC to the structure computer to eliminate false positives from decoy balloons and background objects — the blue balloon's localization error dropped from 120 cm without RANSAC to 5.7 cm with it; the red balloon went from 28.4 cm to 2.5 cm",
						"Wind robustness testing in simulation: completed the course reliably through mild and stiff gusts (56–63 s); intense wind pushed the drone into an obstacle",
						"On tournament day, the algorithm flew clean on the custom quadrotor in the flight cage — no drama, no corrections needed — and the team placed third out of roughly fifteen",
						"My contributions to the final: 3D A* implementation and the P4 polynomial trajectory generation engine",
					],
				},
			],
		},

		{
			slug: "compliant-finger-mechanism",
			title: "Compliant Finger Mechanism",
			year: "2026",
			category: "other",
			image: "/projects/compliant-finger-1.png",
			images: ["/projects/compliant-finger-1.png"],
			videos: ["/projects/compliant-finger-project.mp4"],
			website: "https://cloud.wikis.utexas.edu/wiki/spaces/RMD/pages/996081690/19+-+Compliant+Finger+Mechanism",
			overview:
				"A two-fingered under-actuated gripper that uses a torsional spring to switch between two four-bar linkages, enabling adaptive grasping with a single servo.",
			description:
				"A 3D-printed, belt-driven gripper with two compliant fingers that use a torsional spring to transition between two four-bar linkage configurations -- grasping flat objects as a rigid unit and wrapping around curved ones -- all driven by a single servo.",
			intro:
				"Robotic grippers face a familiar tradeoff: simple designs are reliable but shape-locked, while fully dexterous hands need a motor at every joint. This was the semester capstone for Robot Mechanism Design (ME 380R) at UT Austin -- design a finger that gets adaptive grasping behavior from a single actuator, using linkage geometry instead of extra motors. The mechanism is a five-bar linkage with a torsional spring at the proximal joint. Before contact, the spring is rigid and the whole finger sweeps as a single unit. Once the proximal segment contacts an object, the spring deflects, shifting into a second four-bar configuration that lets the distal segment continue rotating and wrap around the object.",
			sections: [
				{
					title: "The Mechanism",
					items: [
						"Structurally a five-bar linkage, but the torsional spring at the proximal joint lets the motion be analyzed as two sequentially active four-bar mechanisms",
						"In free space, the spring is rigid -- the actuator drives the whole finger to rotate toward the object as one unit (first four-bar)",
						"When the proximal segment contacts an object and stalls, the spring begins to deflect, transitioning into the second four-bar configuration and letting the distal segment continue wrapping around the object",
						"Both configurations have one degree of freedom (verified via the Gruebler equation), so a single actuator drives the entire grasp sequence",
						"Position analysis on each four-bar separately guided link length selection and helped avoid toggle points throughout the motion range",
					],
				},
				{
					title: "Building It",
					items: [
						"All structural parts were 3D printed in PLA on a QIDI Q2, with wall thickness and infill tuned per part -- thicker walls for anything threading a set screw or taking servo load, solid infill for belt tensioners",
						"Both fingers are coupled to a single MG995 servo via a belt-and-pulley drive, with stainless steel axles in ball bearings to minimize friction",
						"The main fabrication challenge was shaft slippage: the round motor shaft let the belt pulley slip under load, which required machining a D-profile on a milling machine to fix",
						"Getting pulley spacing precise enough to tension the belts without flexing the axles required several reprint iterations; adjustable idler pulleys would have saved time in hindsight",
						"Foam tape on the fingertips added grip compliance -- PLA is too slick on its own to reliably hold objects",
						"The whole assembly is mounted on a laser-cut and engraved wooden base from Texas Inventionworks",
					],
				},
				{
					title: "Control",
					items: [
						"An Arduino reads the joystick Y-axis every 20ms and maps deflection to a velocity command for the servo",
						"The servo sweeps 0–90° in 1.5°/iteration increments, with a deadzone to allow fine positional control without drift",
						"A motor driver steps the 9V battery down to 5V for the microcontroller, servo, and joystick",
					],
				},
				{
					title: "Results",
					items: [
						"The mechanism reliably demonstrated both grasping modes: the fingers close as a unit on flat objects (watch cushion), and the distal segments wrap around curved ones (tennis ball, rubber duck)",
						"The torsional spring correctly triggered the second four-bar configuration on contact without any active sensing -- the compliance is purely mechanical",
					],
				},
			],
		},

		{
			slug: "3-dof-articulated-robot-distance-tracking",
			title: "3 DOF Articulated Robot Distance Tracking",
			year: "2025",
			category: "other",
			video: "/projects/dof-tracking-1.mp4",
			videos: ["/projects/dof-tracking-1.mp4"],
			images: ["/projects/dof-tracking-2.png"],
			intro:
				"This was a course project: build a 3D-printed articulated robot arm that tracks an object held in front of it at a fixed distance — pull something closer and the arm extends; step back and it follows. The target could be anything in range: a hand, a notebook, a person. Distance came from an ultrasonic sensor read by an Arduino, which fed that data to a PyBullet controller that computed where the joints needed to go. The part I found most interesting was working out the inverse kinematics by hand — rather than reaching for a solver, I derived the IK using the Rodrigues rotation formula, which simplifies cleanly for a three-joint articulated chain and kept the math transparent.",
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
			category: "other",
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
			year: "2022-24",
			category: "other",
			image: "/projects/indoor-positioning-1.jpg",
			images: ["/projects/indoor-positioning-1.jpg"],
			overview:
				"A camera-based indoor positioning system for a low-cost delivery robot, using ceiling anchor points and OpenCV.",
			description:
				"A camera-based indoor localization system for a low-cost delivery robot (Sidd), using colored ceiling anchor points, OpenCV centroid tracking, and linear transformations to estimate position and orientation.",
			intro:
				"This was the localization system I designed for Sidd, a short indoor delivery robot concept I was developing. The idea came from watching local restaurants and cafes struggle to stay open during the pandemic -- the robot was meant to bring food or beverages to customers without requiring close contact between staff and guests, with potential to expand to use cases like hospital medication delivery. Industry delivery robots already exist, but the goal of Sidd was to offer something affordable for local businesses. This positioning system was built and validated; the full robot was never completed.",
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
			category: "other",
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
			category: "other",
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
			category: "other",
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
			category: "other",
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
			title: "A Bilateral Teleoperation Framework for Dexterous Manipulation",
			venue: "arXiv preprint (arXiv:2606.15434)",
			date: "2026",
			authors:
				"S. Dalla Gasperina, D.H. Kang, H. Zhang, A. Galvan, J.D. Ramirez, A. Kim, M. Helwig, K. Yokoyama, T. Ueno, T. Narita, A. Majewicz-Fey, A.D. Deshpande, and L. Sentis",
			link: "https://arxiv.org/abs/2606.15434",
		},
		{
			title: "ARISTO Hand: Sensing-Driven Distal Hyperextension for Fine-Grained Manipulation",
			venue: "arXiv preprint (arXiv:2605.30508)",
			date: "2026",
			authors:
				"A. Kim, D.H. Kang, M. Helwig, M. Seo, K. Yokoyama, T. Narita, and L. Sentis",
			link: "https://arxiv.org/abs/2605.30508",
			website: "https://aristohand.github.io/",
		},
	],

	experience: [
		{
			slug: "persona-ai",
			img: "/personaai_dark.jpg",
			role: "Locomotion Engineering Intern",
			company: "Persona AI",
			date: "May 2026 - Present",
			website: "https://persona.ai/",
			desc:
				"Engineering behaviors across multiple humanoid hardware platforms using Nvidia's IsaacLab, and developing a pipeline for logging and processing hardware and simulation data.",
			sections: [
				{
					title: "Engineering Humanoid Behaviors",
					description:
						"Details coming soon — I'll share more about this role once I'm able to.",
				},
			],
		},

		{
			slug: "human-centered-robotics-group",
			img: "/hcrl.png",
			image: "/experience/hcrl-1.jpg",
			role: "Researcher",
			company: "Human Centered Robotics Group",
			date: "Sep 2024 - Present",
			website: "https://sites.utexas.edu/hcrl/",
			desc:
				"Researching discriminator-free style transfer for expressive locomotion in humanoids and quadrupeds using RL in IsaacLab to deploy on hardware. Developing a custom retargeting algorithm for teleoperation of a robotic arm and hand, rudimentary whole-body locomanipulation for the Unitree G1, embedded systems (CAN hardware/firmware, ROS2, impedance control) for an imitation-learning-controlled robotic hand, and 6-axis force/torque sensing in humanoid limbs for multi-contact planning.",
			sections: [
				{
					title: "Researching Expressive Robot Locomotion",
					description:
						"Building an RL pipeline in IsaacLab that teaches a Unitree G1 to walk with a distinct style, with the goal of carrying that style to new terrain -- like a slope -- without designing new reward functions. I'm responsible for the full implementation: pretraining models, running RL simulations, and testing different model/algorithm combinations.",
				},
				{
					title: "Teleoperation Hand Retargeting",
					description:
						"Designing and validating my own retargeting algorithm for live hand teleoperation -- sensing how a human bends their fingers and translating that onto the ARISTO hand, including its hyperextension. I'm building two approaches in parallel, a camera-based hand-pose estimator and a motion-capture glove, with early results from the vision pipeline so far.",
				},
				{
					title: "Whole-Body Locomanipulation for the Unitree G1",
					description:
						"Built an RL training pipeline that teaches a Unitree G1 to combine walking and arm manipulation through a simple curriculum -- first walking, then walking at different speeds, then reaching toward a position target within its local workspace. I owned the RL training and sim2sim transfer, working with a labmate who built the higher-level planner. We validated the approach in Mujoco with the G1 walking to a table, picking up a box, and walking again while carrying it.",
				},
				{
					title: "Embedded Systems for an Imitation-Learning Hand",
					description:
						"Designed the power and CAN communication PCB for ARISTO, our imitation-learning-controlled robotic hand, and wrote the driver and ROS2 integration that connect its eight motors to the rest of the control stack -- work that's now part of the ARISTO Hand paper headed to a conference.",
				},
				{
					title: "Force/Torque Sensing for Multi-Contact Planning",
					description:
						"Diagnosed and reverse-engineered a set of aging 6-axis force/torque sensors, then calibrated and integrated two of them into a humanoid's ankles -- including calling the manufacturer directly to recover decades-old calibration data.",
				},
			],
		},

		{
			slug: "lockheed-martin-aeronautics",
			img: "/lockheed.png",
			role: "Systems Engineering Intern",
			company: "Lockheed Martin Aeronautics",
			date: "May 2025 - Aug 2025",
			website: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics.html",
			desc:
				"Developed and owned a Python app for automation of sustainment engineering interpretation of F-35 flight data across all Mission System subsystems, improving process workflow by 92%. Created, maintained, and documented a codebase combining a GUI, automated database interaction (SQL), and automated data visualization. By the end of the internship, the tool had been picked up and recommended for use by multiple teams beyond my own.",
			sections: [
				{
					title: "Automating F-35 Flight Data Analysis",
					description:
						"Developed and owned a Python app for automation of sustainment engineering interpretation of F-35 flight data across all Mission System subsystems, improving process workflow by 92%.",
				},
				{
					title: "GUI, Database, and Visualization Tooling",
					description:
						"Created, maintained, and documented a codebase combining a GUI, automated database interaction (SQL), and automated data visualization.",
				},
				{
					title: "Adoption Across Teams",
					description:
						"The app ended up extending well beyond the team I was embedded with -- by the end of the internship, it had been recommended for use by multiple other teams across the division.",
				},
			],
		},

		{
			slug: "pike-robotics",
			img: "/pike_robotics_logo.jpg",
			image: "/experience/pike-robotics-1.jpg",
			role: "Electrical Engineer",
			company: "Pike Robotics",
			date: "Sep 2023 - Sep 2024",
			website: "https://www.pikerobotics.com/",
			desc:
				"Owned the design and validation of an autonomous embedded system that manages an umbilical line -- providing power, communication, and non-flammable purge gas -- between a host robot and a robot operating inside an oil storage tank, working directly with the CTO on day-to-day priorities and project direction. Also designed the system's 250W power distribution PCB, meeting UL60950-1 safety standards under UL 1203 C1D1 explosion-proof conditions.",
			sections: [
				{
					title: "Owning the Embedded System End to End",
					description:
						"I owned the embedded system end to end -- design, build, and validation -- working directly with the CTO to set both day-to-day priorities and the project's overall direction.",
				},
				{
					title: "Umbilical Line: Power, Communication, and Purge Gas",
					description:
						"Designed the embedded system that manages the umbilical line connecting the robot to the surface -- carrying power, communication, and a non-flammable purge gas that keeps the robot's electronics enclosure compliant with explosion-proof safety standards.",
				},
				{
					title: "250W Explosion-Proof Power Distribution PCB",
					description:
						"Designed and implemented the robot's main 250W power distribution PCB, powering its motors, onboard computer, sensors, and microcontrollers. Met UL60950-1 electrical safety standards under UL 1203 C1D1 explosion-proof conditions by porting published specs into the design and ensuring every component on the board was individually certified.",
				},
				{
					title: "Cable Management and Fleet-Ready Communication",
					description:
						"One of the hardest problems was managing the umbilical cable's load against the anchor holding it -- by the end of my time there, I had proof-of-concept tests showing it worked. I'm most proud that the system I built operated autonomously and could communicate with the host robot as part of a fleet.",
				},
			],
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
			courseTopics: [
				{
					topic: "Robotics & Control",
					courses: [
						{ code: "ASE 387P", name: "Aerial Robotics" },
						{ code: "ME 380R", name: "Robot Mechanism Design" },
						{ code: "ECE 362K", name: "Intro to Automatic Control" },
						{ code: "RBT 350", name: "Gateway to Robotics" },
						{ code: "ECE 319H", name: "Intro to Embedded Systems (Honors)" },
					],
				},
				{
					topic: "Signal Processing",
					courses: [
						{ code: "ECE 445S", name: "Real-Time Digital Signal Processing Lab" },
						{ code: "ECE 351M", name: "Digital Signal Processing" },
						{ code: "ECE 351H", name: "Probability and Random Processes (Honors)" },
						{ code: "ECE 313", name: "Linear Systems and Signals" },
					],
				},
				{
					topic: "Algorithms & Software",
					courses: [
						{ code: "ECE 360C", name: "Algorithms" },
						{ code: "ECE 312H", name: "Software Design and Implementation I (Honors)" },
						{ code: "ECE 306", name: "Introduction to Computing" },
					],
				},
				{
					topic: "Circuits & Electronics",
					courses: [
						{ code: "ECE 411", name: "Circuit Theory" },
						{ code: "ECE 316", name: "Digital Logic Design" },
						{ code: "ECE 302H", name: "Intro to Electrical Engineering (Honors)" },
					],
				},
				{
					topic: "Mathematics",
					courses: [
						{ code: "M 340L", name: "Matrices and Matrix Calculations" },
						{ code: "M 427J", name: "Differential Equations with Linear Algebra" },
						{ code: "M 427L", name: "Advanced Calculus for Applications II (Honors)" },
						{ code: "M 325K", name: "Discrete Mathematics" },
					],
				},
			],
		},
	],
};

export default INFO;
