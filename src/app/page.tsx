import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    number: "01",
    title: "Bio-Tutor",
    eyebrow: "Offline AI Biology Tutor",
    description:
      "An offline mobile tutor for A/L Biology students, combining on-device AI with local syllabus retrieval for grounded Sinhala explanations and MCQ practice.",
    technologies: ["Flutter", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "Gemma 4", "LiteRT"],
    accent: "lime",
  },
  {
    number: "02",
    title: "Astraea",
    eyebrow: "University E-Procurement System",
    description:
      "A role-based platform that automates requisitions, multi-level approvals, vendor quotations, bid evaluation, purchase orders, notifications, and AI-assisted specification checking.",
    technologies: ["React", "Spring Boot", "Spring Security", "MySQL", "JWT", "REST APIs"],
    accent: "blue",
  },
  {
    number: "03",
    title: "CarePlus",
    eyebrow: "Medical Clinic App",
    description:
      "A web and mobile clinic management application for registration, family management, notifications, billing, prescriptions, personalised plans, and health education.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Jira"],
    accent: "orange",
  },
  {
    number: "04",
    title: "Food Ordering System",
    eyebrow: "Cloud-Native Platform",
    description:
      "A scalable microservices ordering platform with asynchronous communication, secure authentication, containerisation, CI/CD, load balancing, and AWS deployment.",
    technologies: ["Node.js", "MongoDB", "RabbitMQ", "Nginx", "Docker", "AWS EC2", "GitHub Actions"],
    accent: "purple",
  },
  {
    number: "05",
    title: "Resume Screener",
    eyebrow: "AI-Powered Recruitment",
    description:
      "An explainable screening system that compares resumes with job descriptions, generates semantic match scores, and identifies matched and missing skills.",
    technologies: ["Python", "BERT", "Hugging Face", "Qwen LLM", "Scikit-learn", "Streamlit"],
    accent: "pink",
  },
  {
    number: "06",
    title: "Hotel Room Booking",
    eyebrow: "Full-stack Web Application",
    description:
      "A layered booking application with separate guest, staff, and admin access, covering room inventory, reservations, payments, notifications, and reviews.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Docker"],
    accent: "teal",
  },
];

const skillGroups = [
  ["Languages", "Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
  ["Frontend", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Material UI", "Streamlit"],
  ["Backend", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  ["Data & AI", "MySQL", "MongoDB", "Prisma", "Spring Data JPA", "BERT", "RAG", "Gemma 4"],
  ["Cloud & DevOps", "AWS EC2", "Docker", "Docker Compose", "GitHub Actions", "Nginx", "RabbitMQ"],
  ["Workflow", "Git", "GitHub", "Postman", "Jira", "Agile", "Code Reviews"],
];

const certifications = [
  ["2026", "Crash Course: AWS Basics", "KodeKloud"],
  ["2026", "Introduction to Prompt Engineering", "Simplilearn"],
  ["2025", "Full Stack Web Development", "SKYREK (Pvt) Ltd"],
  ["2025", "Introduction to DevOps", "IBM"],
  ["2025", "Supervised Machine Learning: Regression and Classification", "DeepLearning.AI"],
  ["2025", "Postman API Fundamentals Student Expert", "Postman"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Back to top">
          SJ<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Let&apos;s talk <ArrowTopRightOnSquareIcon /></a>
        </div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Computer Engineering Graduate Candidate</p>
          <h1>Building useful<br /><em>things</em> with code.</h1>
          <p className="hero-description">
            I&apos;m Srimali JayaweeraArachchi, a software engineer who enjoys turning
            complex problems into reliable, thoughtful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">Explore my work <ArrowDownIcon /></a>
            <a className="text-link" href="mailto:jasrimalimadurangani@gmail.com">Get in touch <ChevronRightIcon /></a>
          </div>
          <div className="hero-meta">
            <span><MapPinIcon /> Sri Lanka</span>
            <span className="status"><i /> Open to graduate opportunities</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="portrait-frame">
            <Image src="/profile.avif" alt="Srimali JayaweeraArachchi" fill priority sizes="(max-width: 800px) 70vw, 400px" />
          </div>
          <div className="floating-note note-top">Full-stack<br /><strong>developer</strong></div>
          <div className="floating-note note-bottom">01 <span>/</span> 06<br /><strong>Selected projects</strong></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-grid">
          <p className="section-kicker">01 / About me</p>
          <div>
            <h2>Curious by nature.<br /><span>Driven by impact.</span></h2>
            <p className="large-copy">Computer Engineering graduate candidate with six months of industry experience and a hands-on approach to full-stack development, backend systems, AI, cloud technologies, and DevOps.</p>
            <a className="text-link dark-link" href="#experience">More about my journey <ChevronRightIcon /></a>
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="experience">
        <div className="section-heading">
          <p className="section-kicker">02 / Experience</p>
          <h2>Where I&apos;ve been<br /><span>putting it into practice.</span></h2>
        </div>
        <article className="experience-card">
          <div className="experience-date">MAY 2025 — NOV 2025<br /><span>REMOTE</span></div>
          <div className="experience-main">
            <p className="role-label">Trainee Software Engineer</p>
            <h3>Global Synergy Tec <span>Pvt Ltd</span></h3>
            <p>Contributed to three live products — Bidrooo, HireX, and TravelX — as part of a four-member remote engineering team.</p>
            <ul>
              <li>Converted 10+ legacy HTML pages into modular Next.js and TypeScript components, and built full CRUD workflows for auction listings with secure multi-image uploads and VIN validation.</li>
              <li>Built and maintained 15+ admin dashboard modules with JWT authentication, role-based access control, and server-side pagination.</li>
              <li>Independently developed TravelX&apos;s 12-module Property Manager Dashboard end-to-end before integrating it with live REST APIs.</li>
            </ul>
            <div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>Prisma</span><span>MySQL</span><span>REST APIs</span></div>
          </div>
          <BriefcaseIcon className="experience-icon" />
        </article>
      </section>

      <section className="section-shell section-block education-block">
        <div className="section-heading">
          <p className="section-kicker">03 / Education</p>
          <h2>Learning the<br /><span>why behind the how.</span></h2>
        </div>
        <div className="education-grid">
          <div className="education-card">
            <p className="card-year">2022 — PRESENT</p>
            <h3>BScEng (Hons) in<br />Computer Engineering</h3>
            <p>University of Ruhuna<br />Faculty of Engineering</p>
            <div className="grade"><strong>3.46</strong><span>SGPA<br />Academic requirements completed</span></div>
          </div>
          <div className="education-card muted-card">
            <p className="card-year">2020</p>
            <h3>G.C.E. Advanced Level<br /><span>Physical Science</span></h3>
            <p>H/Rajapaksha Central College</p>
            <div className="results"><span><b>A</b> Combined Mathematics</span><span><b>A</b> Chemistry</span><span><b>B</b> Physics</span></div>
          </div>
        </div>
      </section>

      <section className="skills-band" id="about">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <p className="section-kicker">04 / Toolkit</p>
            <h2>Tools I use to<br /><span>make ideas real.</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(([title, ...skills]) => (
              <div className="skill-group" key={title}>
                <p>{title}</p>
                <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block projects-section" id="projects">
        <div className="section-heading projects-heading">
          <p className="section-kicker">05 / Selected work</p>
          <h2>Projects with a<br /><span>purpose behind them.</span></h2>
          <p>From offline AI tools to cloud-native platforms, these are a few of the systems I&apos;ve designed and built.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.title}>
              <div className="project-top"><span>{project.number}</span><CodeBracketIcon /></div>
              <div className="project-visual"><div className="visual-orb" /><span>{project.number}</span></div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block certifications-block">
        <div className="section-heading">
          <p className="section-kicker">06 / Certifications</p>
          <h2>Always staying<br /><span>in learning mode.</span></h2>
        </div>
        <div className="cert-list">
          {certifications.map(([year, title, issuer]) => (
            <div className="cert-row" key={title}><span>{year}</span><CheckBadgeIcon /><strong>{title}</strong><em>{issuer}</em></div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <p className="section-kicker light-kicker">07 / Contact</p>
          <h2>Have a challenge<br /><em>worth solving?</em></h2>
          <p>I&apos;m currently looking for a graduate or entry-level Software Engineer opportunity where I can contribute, learn, and grow with a great team.</p>
          <a className="button button-light" href="mailto:jasrimalimadurangani@gmail.com">Say hello <ArrowTopRightOnSquareIcon /></a>
          <div className="contact-details">
            <a href="mailto:jasrimalimadurangani@gmail.com"><EnvelopeIcon /> jasrimalimadurangani@gmail.com</a>
            <a href="tel:+94785684202"><PhoneIcon /> +94 78 568 4202</a>
            <a href="https://github.com/Srimali-JayaweeraArachchi" target="_blank" rel="noreferrer"><CodeBracketIcon /> GitHub / Srimali-JayaweeraArachchi</a>
          </div>
        </div>
      </section>
      <footer className="footer section-shell"><span>© 2026 Srimali JayaweeraArachchi</span><span>Designed & built with care.</span></footer>
    </main>
  );
}
