const menuLinks = document.querySelectorAll(".top-nav a");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const slides = document.querySelectorAll(".slide");
const tiles = document.querySelectorAll(".tile");
const projectModal = document.querySelector(".project-modal");
const modalClose = document.querySelector(".modal-close");
const modalImage = document.querySelector(".modal-image");
const modalTimeline = document.querySelector(".modal-timeline");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector(".modal-summary");
const modalDescription = document.querySelector(".modal-description");
const modalRole = document.querySelector(".modal-role");
const modalTools = document.querySelector(".modal-tools");
const modalMethods = document.querySelector(".modal-methods");
const modalResults = document.querySelector(".modal-results");
const modalPhotos = document.querySelector(".modal-photos");
const modalCollaborators = document.querySelector(".modal-collaborators");
// const modalDemo = document.querySelector(".modal-demo");
// const modalGithub = document.querySelector(".modal-github");
// const modalCollaborator = document.querySelector(".modal-collaborator");
const modalAwardsSection = document.querySelector(".modal-awards-section");
const modalAwardsHeading = document.querySelector(".modal-awards-heading");
const modalAwards = document.querySelector(".modal-awards");

const projectDetails = {
  portfolio: {
    title: "Personal Portfolio Website",
    timeline: "Summer 2026",
    summary: "Designed and built a personal robotics portfolio to showcase projects in HRI, robot design, AI, multi-robot systems, and prototyping.",
    imageClass: "project-image-one",
    image: "assets/personal-portfolio-home.png",
    description:
      "Designed and developed a personal portfolio website to present robotics, HRI, design, and AI projects in a clear and professional format.",
    role: "Designer and developer responsible for structure, visual style, content strategy, and interaction design.",
    tools: "HTML, CSS, JavaScript, UX, portfolio design, personal branding.",
    methods:
      "Designed the structure and content strategy, built reusable project cards, organized summaries and detailed project pages, and created a brand direction around human-centered robotics.",
    results:
      "Created an evolving platform for communicating technical depth, research interests, and future robotics, HRI, and design work to labs, recruiters, and collaborators.",
    // photos: "Current site interface and project-card system. Add screenshots as the portfolio evolves.",
    collaborators: "Solo project.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
  },
  webby: {
    title: "Webby: The Outreach Drawing Robot",
    timeline: "Inspired4Robotics Hackathon",
    summary:
      "Webby is an interactive outreach robot that makes robotics lab tours more memorable by drawing and signing a visitor's name as a personalized take-home artifact.",
    imageClass: "project-image-eleven",
    image: "assets/webby.png",
    description:
      "Traditional lab tours can feel passive for middle school and high school visitors: students walk through labs, listen to explanations, and often leave without a hands-on memory. Webby turns the tour into an interactive experience by combining a two-wheeled driving base, a pen servo mechanism, and a simple GUI where visitors enter their name.",
    role:
      "I contributed to the concept, robot interaction design, outreach framing, prototype development, and presentation/storytelling for the hackathon. As a team hackathon project, my work focused on shaping Webby into a robotics demo that felt approachable, educational, and memorable for younger visitors.",
    tools:
      "Human-Robot Interaction, outreach robotics, robotics design, hackathon prototyping, interactive robot design, GUI input, servo control, tele-operation, two-wheeled robot base.",
    methods:
      "Built around a GUI where visitors enter their name, a marker mounted on a servo for writing and drawing, and a mobile base that moves across the page as the canvas. The concept also includes tele-operation/control modes to demonstrate different robot operation styles and future expansion ideas such as a spider/web-themed design, painting, multi-tool arms, gripper/brush/marker attachments, and programmable activities for older students.",
    results:
      "Webby makes robotics outreach more memorable, educational, and interactive. It gives visitors something to learn and something to take home, making it especially useful for school tours, open houses, STEM outreach events, and lab visits where robotics should feel touchable, question-worthy, and easy to remember.",
    photos:
      "Designed for STEM outreach events, lab tours, school visits, and open houses.",
    collaborators: "Team hackathon project.",
    awardsHeading: "Achievement",
    awards: "Secured 3rd position at the Inspired4Robotics Hackathon."
  },
  qcars: {
    title: "Controller for QCars",
    timeline: "Jan 2026 - May 2026 | Fluent Robotics Lab, University of Michigan",
    summary: "Developed ROS-based trajectory tracking and centralized control for QCars, enabling low-speed single-car and two-car coordinated experiments using OptiTrack.",
    imageClass: "project-image-two",
    description:
      "Developed and calibrated trajectory-tracking controllers for Quanser QCars using ROS and OptiTrack motion capture for low-speed autonomous tracking and multi-robot coordination.",
    role: "Robotics researcher/developer focused on controller development, tuning, QCar setup, and multi-robot experimentation.",
    tools: "ROS, OptiTrack, motion capture, feedback control, Quanser QCar, centralized communication.",
    methods:
      "Built understanding of ROS nodes, data transfer, QCar setup, and MoCap integration; tuned feedback controllers across speeds and trajectories; tested payload-pushing behavior; extended the system to two QCars.",
    results:
      "Enabled low-speed trajectory tracking for single-car experiments and synchronous centralized control for coordinated two-car experiments.",
    // photos: "Add lab photos, trajectory plots, QCar setup photos, or controller demos.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    collaborators: "Solo Project within the Fluent Robotics Lab.",
    // collaborators: "Fluent Robotics Lab, University of Michigan.",
  },
  "campus-safety": {
    title: "One Click to Safety: Reimagining Campus Security at UMich",
    timeline: "Feb 2026 - Present | Ann Arbor, MI",
    summary: "A human-centered campus safety platform designed to help students access emergency resources, real-time support, and critical information with fewer clicks.",
    imageClass: "project-image-three",
    image: "assets/one-click-to-safety.png",
    description:
      "Designed a concept for a unified campus safety platform that centralizes emergency support, safe ride and safe walk options, live location sharing, reporting tools, legal-rights information, blue light maps, open-building maps, weather alerts, and marked-safe notifications.",
    role: "Team contributor helping define the problem, student need, and product vision for a centralized safety experience.",
    tools: "Human-centered design, campus safety strategy, UX research, product strategy, social impact design.",
    methods:
      "Mapped fragmented safety resources, framed the user need during high-stress situations, and shaped an accessible app concept for fast, confident action.",
    results:
      "Presented at the U-M Life Changing Education 2026 Campus of the Future Student Idea Showcase; selected as a semi-finalist from 700+ submissions and received a $750 award.",
    // photos: "Add presentation images, app concept screens, or showcase materials.",
    // demo: "https://www.linkedin.com/in/anandi624/",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators:
      '<a href="https://www.linkedin.com/in/carolina-janicke/" target="_blank" rel="noopener noreferrer">Carolina Janicke</a>, <a href="https://www.linkedin.com/in/ross-mcquate/" target="_blank" rel="noopener noreferrer">Ross McQuate</a>',
    awards: "Semi-finalist from 700+ submissions; $750 award."
  },
  "smart-sort": {
    title: "Smart Industrial Sort: Automated Conveyor Belt Prototype",
    timeline: "Apr 2026 - May 2026 | Course Project",
    summary: "Built a sensor-driven conveyor prototype that detects and sorts defective objects using Arduino, IR sensing, and servo actuation.",
    imageClass: "project-image-four",
    image: "assets/smart-industrial-sort.png",
    description:
      "Designed and built a miniature automated conveyor belt system that detects and separates defective objects in real time using optical sensing and servo-based actuation.",
    role: "Team project contributor focused on prototype development, Arduino logic, sensing, actuation, and hardware testing.",
    tools: "Arduino, IR proximity sensor, DC motor, servo motor, sensors, actuation, mechatronics.",
    methods:
      "Built a DC motor-driven conveyor, integrated object detection, programmed classification and sorting behavior, and varied object color, belt speed, and thresholds during trials.",
    results:
      "Demonstrated an end-to-end compact quality-control pipeline for real-time detection and sorting.",
    // photos: "Prototype photo added showing the conveyor mechanism, Arduino wiring, object path, and sorting bins.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    collaborators:
      '<a href="https://www.linkedin.com/in/purwa-anasane/" target="_blank" rel="noopener noreferrer">Purwa Anasane</a>',
  },
  wingmate: {
    title: "Wingmate Dating App",
    timeline: "Sep 2025 - Nov 2025 | Ross School of Business, University of Michigan",
    summary: "Designed the technical architecture and mobile deployment strategy for an AI-powered dating app during a six-week innovation competition.",
    imageClass: "project-image-five",
    image: "assets/wingmate.png",
    description:
      "Participated as the Technical Architect in a six-week Business+Tech innovation competition exploring technology, product strategy, and user-centered digital platforms.",
    role: "Technical Architect responsible for implementation strategy, backend planning, API framework, and database design.",
    tools: "Technical architecture, product strategy, AI application design, backend design, mobile app planning.",
    methods:
      "Defined backend infrastructure, API framework, and database design; collaborated with industry mentors; refined specifications; presented the development roadmap to judges and stakeholders.",
    results:
      "Created a technical plan for an AI-powered dating app concept targeting large-scale iOS and Android deployment.",
    // photos: "Add pitch deck screenshots, architecture diagrams, or competition photos.",
    // demo: "https://www.linkedin.com/in/anandi624/",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators:
      '<a href="https://www.linkedin.com/in/kartikapinjarkar/" target="_blank" rel="noopener noreferrer">Kartika Pinjarkar</a>, <a href="https://www.linkedin.com/in/shirleygiraldo/" target="_blank" rel="noopener noreferrer">Shirley Giraldo</a>, <a href="https://www.linkedin.com/in/noelle-cho/" target="_blank" rel="noopener noreferrer">Noelle Cho</a>',
  },
  "robot-navigation": {
    title: "A Hitchhiker's Guide to Robot Navigation",
    timeline: "Nov 2025 - Dec 2025 | Human-Robot Interaction Final Project",
    summary: "Benchmarked Leader-Follower robot navigation against MPC in dense simulated crowds to study socially aware robot motion.",
    imageClass: "project-image-six",
    description:
      "Integrated a Leader-Follower navigation strategy into a Social Force Model-based crowd simulator to study how robots can use human motion as a guide in dense, dynamic environments.",
    role: "Team project contributor focused on simulation, evaluation, and HRI navigation analysis.",
    tools: "HRI, social navigation, MPC, simulation, crowd modeling, Python.",
    methods:
      "Implemented human-guided robot navigation, benchmarked against MPC, ran 600+ simulations with up to 100 reactive pedestrians, and evaluated social compliance, efficiency, path quality, and navigation performance.",
    results:
      "Tested promenade, crossing, roundabout, museum, convention, and Black Friday-style crowd environments to compare socially aware navigation strategies.",
    // photos: "Add simulator screenshots, path plots, crowd scenario images, or demo clips.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators: '<a href="https://www.linkedin.com/in/akshunn-trivedi/" target="_blank" rel="noopener noreferrer">Akshunn Trivedi</a>, <a href="https://www.linkedin.com/in/sebastian-helgeson/overlay/about-this-profile/" target="_blank" rel="noopener noreferrer">Sebastian Helgeson</a>',
  },
  wildlife: {
    title: "Object Detection-Powered Wildlife Monitoring System",
    timeline: "Oct 2024 - May 2025 | Final Year Major Project",
    summary: "Built and deployed a YOLOv8-based wildlife detection system for identifying 12 animal species through a web application.",
    imageClass: "project-image-seven",
    description:
      "Developed an end-to-end wildlife detection system using YOLOv8 to identify 12 animal species, including dataset preparation, model training, evaluation, and web deployment.",
    role: "Computer vision developer responsible for dataset preparation, model training, evaluation, and Flask deployment.",
    tools: "YOLOv8, computer vision, deep learning, Flask, dataset annotation, web deployment.",
    methods:
      "Combined and prepared animal image datasets, improved annotations and preprocessing, trained a YOLOv8 model with transfer learning, and built a Flask upload interface for images and videos.",
    results:
      "Created a working web-based detection pipeline and published related work on object detection-powered wildlife monitoring.",
    // photos: "Add detection screenshots, dataset samples, model output images, or app demo media.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators: "",
    awardsHeading: "Paper Published",
    awards: "IEEE, June 20, 2025."
  },
  "iot-kitchen": {
    title: "IoT-Based Smart Kitchen System Survey Project",
    timeline: "Survey Project",
    summary: "Surveyed IoT-based kitchen safety systems using gas, temperature, Arduino, GSM, and wireless communication technologies.",
    imageClass: "project-image-eight",
    description:
      "Surveyed IoT-based kitchen safety systems designed to detect LPG leaks, monitor temperature, and reduce kitchen hazards using sensor-based automation.",
    role: "Researcher analyzing sensing components, communication protocols, and safety-system architecture.",
    tools: "IoT, Arduino, MQ2 gas sensor, LM35 temperature sensor, GSM, Zigbee, Wi-Fi.",
    methods:
      "Studied sensor and communication options, compared wireless protocols, and proposed a real-time monitoring architecture for proactive kitchen safety.",
    results:
      "Outlined how sensor integration and user-friendly alerts can reduce kitchen-related accidents.",
    // photos: "Add architecture diagrams, sensor images, or survey summary graphics.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators: "",
  },
  "youtube-analysis": {
    title: "Top 100 YouTube Channels Analysis",
    timeline: "Data Analysis Project",
    summary: "Used logistic regression and Scikit-learn to analyze and classify YouTube channel success based on subscriber metrics.",
    imageClass: "project-image-nine",
    description:
      "Built a machine learning classification model using a Kaggle dataset of the Top 100 YouTube channels to analyze subscriber-based ranking patterns.",
    role: "Data analyst responsible for preprocessing, model implementation, train-test evaluation, and result interpretation.",
    tools: "Python, Scikit-learn, logistic regression, data analysis, Kaggle.",
    methods:
      "Preprocessed channel metrics, trained a logistic regression classifier, used train-test split, and evaluated model accuracy.",
    results:
      "Explored how subscriber metrics can be used to classify channel success.",
    // photos: "Add notebook screenshots, charts, confusion matrices, or dataset visuals.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators: "",
  },
  "music-system": {
    title: "Music Management System",
    timeline: "Software Design Project",
    summary: "Designed UML diagrams and built a C++ object-oriented music management system for concert equipment and audience coordination.",
    imageClass: "project-image-ten",
    description:
      "Designed and implemented a concert music management system using object-oriented programming principles and UML-based software design.",
    role: "Software designer and C++ developer responsible for UML modeling and object-oriented implementation.",
    tools: "C++, UML, object-oriented programming, system design, software architecture.",
    methods:
      "Created use case, class, sequence, and deployment diagrams; designed class hierarchies; built a C++ application for equipment, ticketing, audience coordination, speakers, AUX, and microphone connectivity.",
    results:
      "Produced a structured software design and working object-oriented application for concert management.",
    // photos: "Add UML diagrams, terminal screenshots, or system architecture visuals.",
    // demo: "https://github.com/anandiaroraa",
    // github: "https://github.com/anandiaroraa",
    // collaborator: "https://www.linkedin.com/in/anandi624/",
    collaborators: "",
  }
};

function showSlide(slideId) {
  const id = slideId || "home";
  const targetSlide = document.getElementById(id) || document.getElementById("home");

  slides.forEach((slide) => {
    slide.classList.toggle("active", slide === targetSlide);
  });

  menuLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${targetSlide.id}`);
  });

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
}

function openProjectModal(projectId) {
  const project = projectDetails[projectId];

  if (!project || !projectModal) {
    return;
  }

  if (modalImage) modalImage.className = `modal-image ${project.imageClass}`;
  if (modalImage) {
    modalImage.innerHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} project screenshot">`
      : project.visualHTML || "";
  }
  if (modalTimeline) modalTimeline.textContent = project.timeline;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSummary) modalSummary.textContent = project.summary;
  if (modalDescription) modalDescription.textContent = project.description;
  if (modalRole) modalRole.textContent = project.role;
  if (modalTools) modalTools.textContent = project.tools;
  if (modalMethods) modalMethods.textContent = project.methods;
  if (modalResults) modalResults.textContent = project.results;
  if (modalPhotos) modalPhotos.textContent = project.photos;
  if (modalCollaborators) modalCollaborators.innerHTML = project.collaborators;
  // if (modalDemo) modalDemo.href = project.demo;
  // if (modalGithub) modalGithub.href = project.github;
  // if (modalCollaborator) modalCollaborator.href = project.collaborator;
  if (modalAwardsSection) modalAwardsSection.hidden = !project.awards;
  if (modalAwardsHeading) modalAwardsHeading.textContent = project.awardsHeading || "Awards";
  if (modalAwards) modalAwards.textContent = project.awards || "";

  projectModal.removeAttribute("hidden");
  modalClose?.focus();
}

function closeProjectModal() {
  projectModal?.setAttribute("hidden", "");
}

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").slice(1);

    if (document.getElementById(targetId)) {
      event.preventDefault();
      showSlide(targetId);
      history.pushState(null, "", `#${targetId}`);
    }
  });
});

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    tiles.forEach((item) => item.classList.remove("active"));
    tile.classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  const projectButton = event.target.closest(".view-project");

  if (projectButton) {
    openProjectModal(projectButton.dataset.project);
  }
});

modalClose?.addEventListener("click", closeProjectModal);

projectModal?.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});

window.addEventListener("popstate", () => {
  showSlide(location.hash.slice(1));
});

showSlide(location.hash.slice(1));
