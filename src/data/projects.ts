export const projects = [
  {
    number: "01",
    title: "Bio-Tutor",
    eyebrow: "Offline AI Biology Tutor",
    description:
      "An offline mobile tutor for A/L Biology students, combining on-device AI with local syllabus retrieval for grounded Sinhala explanations and MCQ practice.",
    technologies: ["Flutter", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "Gemma 4", "LiteRT"],
    accent: "lime",
    image: "/projects/Bio-Tutor.png",
  },
  {
    number: "02",
    title: "Astraea",
    eyebrow: "University E-Procurement System",
    description:
      "A role-based platform that automates requisitions, multi-level approvals, vendor quotations, bid evaluation, purchase orders, notifications, and AI-assisted specification checking.",
    technologies: ["React", "Spring Boot", "Spring Security", "MySQL", "JWT", "REST APIs"],
    accent: "blue",
    image: "/projects/Astraea.png",
  },
  {
    number: "03",
    title: "CarePlus",
    eyebrow: "Medical Clinic App",
    description:
      "A web and mobile clinic management application for registration, family management, notifications, billing, prescriptions, personalised plans, and health education.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Jira"],
    accent: "orange",
    image: "/projects/CarePlus.jpg",
  },
  {
    number: "04",
    title: "Food Ordering System",
    eyebrow: "Cloud-Native Platform",
    description:
      "A scalable microservices ordering platform with asynchronous communication, secure authentication, containerisation, CI/CD, load balancing, and AWS deployment.",
    technologies: ["Node.js", "MongoDB", "RabbitMQ", "Nginx", "Docker", "AWS EC2", "GitHub Actions"],
    accent: "purple",
    image: "/projects/Food Ordering System.png",
  },
  {
    number: "05",
    title: "Resume Screener",
    eyebrow: "AI-Powered Recruitment",
    description:
      "An explainable screening system that compares resumes with job descriptions, generates semantic match scores, and identifies matched and missing skills.",
    technologies: ["Python", "BERT", "Hugging Face", "Qwen LLM", "Scikit-learn", "Streamlit"],
    accent: "pink",
    image: "/projects/Resume Screener.png",
  },
  {
    number: "06",
    title: "Hotel Room Booking",
    eyebrow: "Full-stack Web Application",
    description:
      "A layered booking application with separate guest, staff, and admin access, covering room inventory, reservations, payments, notifications, and reviews.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Docker"],
    accent: "teal",
    image: "/projects/Hotel Room Booking.png",
  },
] as const;
