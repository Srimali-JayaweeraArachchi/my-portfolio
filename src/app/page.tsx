"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { projects } from "@/data/projects";
import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const [activeSection, setActiveSection] = useState("top");
  const [contactStatus, setContactStatus] = useState("");
  const [showAboutVideoButton, setShowAboutVideoButton] = useState(false);

  useEffect(() => {
    const sectionIds = ["top", "about", "education", "experience", "skills", "projects", "contact"];
    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;
      const headerOffset = 120;
      const currentSection = sectionIds.reduce((activeId, sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= headerOffset) {
          return sectionId;
        }
        return activeId;
      }, "top");

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setContactStatus("Thanks — your message has been received.");
    } catch {
      setContactStatus("Something went wrong. Please email me directly.");
    }
  };

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className={`brand${activeSection === "top" ? " active" : ""}`} href="#top" aria-label="Back to top">
          SJ<span>.</span><strong>Portfolio</strong>
        </a>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com/in/srimali-jayaweeraarachchi-824937261/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Srimali-JayaweeraArachchi" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="nav-links">
          <a className={activeSection === "top" ? "active" : ""} href="#top">Home</a>
          <a className={activeSection === "about" ? "active" : ""} href="#about">About</a>
          <a className={activeSection === "education" ? "active" : ""} href="#education">Education</a>
          <a className={activeSection === "experience" ? "active" : ""} href="#experience">Experience</a>
          <a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a>
          <a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a>
          <a href="#contact" className={`nav-cta${activeSection === "contact" ? " active" : ""}`}>Let&apos;s talk <ArrowTopRightOnSquareIcon /></a>
        </div>
      </nav>

      <section className="reference-hero" id="top">
        <div className="reference-name">SRIMALI JAYAWEERA<br className="reference-name-break" />ARACHCHI</div>
      </section>

      <section className="reference-intro">
        <p className="reference-lead"><strong>Hi, I&apos;m Srimali,</strong> a Computer Engineering graduate candidate and software engineer focused on full-stack applications, backend systems, AI, and cloud technologies.</p>
        <div className="reference-portrait">
          <Image src="/Me.png" alt="Srimali JayaweeraArachchi" fill sizes="180px" />
        </div>
        <div className="reference-socials" aria-label="Contact and social links">
          <a href="mailto:jasrimalimadurangani@gmail.com" aria-label="Email"><EnvelopeIcon /></a>
          <a href="https://github.com/Srimali-JayaweeraArachchi" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/srimali-jayaweeraarachchi-824937261/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        <a className="reference-button" href="#projects">VIEW MY PROJECTS</a>
      </section>

      <section className="intro-strip" id="about">
        <div className="section-shell intro-grid">
          <div className="about-aside">
            <p className="section-kicker">About me</p>
            <div className="about-portrait">
              <video
                ref={aboutVideoRef}
                autoPlay
                muted
                playsInline
                aria-label="Srimali JayaweeraArachchi in a business suit"
                onPlay={() => setShowAboutVideoButton(false)}
                onTimeUpdate={(event) => {
                  if (event.currentTarget.currentTime >= 4) {
                    event.currentTarget.currentTime = 0;
                    void event.currentTarget.play().catch(() => {
                      setShowAboutVideoButton(true);
                    });
                  }
                }}
              >
                <source src="/Woman_in_business_suit_standing_20260919201137.mp4" type="video/mp4" />
              </video>
              {showAboutVideoButton && (
                <button
                  className="about-video-replay"
                  type="button"
                  aria-label="Play About video"
                  onClick={() => {
                    const video = aboutVideoRef.current;
                    if (!video) {
                      return;
                    }

                    video.currentTime = 0;
                    setShowAboutVideoButton(false);
                    void video.play().catch(() => setShowAboutVideoButton(true));
                  }}
                >
                  <span aria-hidden="true">▶</span>
                </button>
              )}
            </div>
          </div>
          <div>
            <p className="about-copy">I am a Computer Engineering graduate candidate at the University of Ruhuna, having completed the academic requirements for my BScEng (Hons) degree. My studies have built a strong foundation across software engineering, artificial intelligence, machine learning, cloud computing, embedded systems, databases, and DevOps.</p>
            <p className="about-copy">Alongside my studies, I gained six months of industry experience as a Trainee Software Engineer, contributing to live full-stack products with Next.js, TypeScript, REST APIs, Prisma, MySQL, authentication, and role-based access control.</p>
            <p className="about-copy">I enjoy building reliable software that solves real problems, from offline AI learning tools and university platforms to cloud-native systems. I bring curiosity, careful problem-solving, teamwork, and a commitment to continuous learning to every project.</p>
            <a className="text-link dark-link" href="#experience">More about my journey <ChevronRightIcon /></a>
          </div>
        </div>
        <div className="section-shell education-block" id="education">
          <div className="section-heading">
            <p className="section-kicker">Education</p>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <p className="card-year">2022 — PRESENT</p>
              <h3>BScEng (Hons) in<br />Computer Engineering</h3>
              <p>University of Ruhuna<br />Faculty of Engineering</p>
              <div className="grade"><span>Academic requirements completed</span></div>
            </div>
            <div className="education-card muted-card">
              <p className="card-year">2020</p>
              <h3>G.C.E. Advanced Level<br /><span>Physical Science</span></h3>
              <p>H/Rajapaksha Central College</p>
              <div className="results"><span><b>A</b> Combined Mathematics</span><span><b>A</b> Chemistry</span><span><b>B</b> Physics</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
        </div>
        <article className="experience-card">
          <div className="experience-date">
            MAY 2025 — NOV 2025<br /><span>REMOTE</span>
            <Image className="experience-company-image" src="/GST.jpg" alt="Global Synergy Tec" width={260} height={150} />
          </div>
          <div className="experience-main">
            <p className="role-label">Trainee Software Engineer</p>
            <h3>Global Synergy Tec <span>Pvt Ltd</span></h3>
            <p>Worked on three live products — Bidrooo, HireX, and TravelX — as part of a four-member remote engineering team.</p>
            <ul>
              <li>Modernised 10+ legacy pages into modular Next.js and TypeScript components, including auction CRUD workflows, secure multi-image uploads, and VIN validation.</li>
              <li>Built and maintained 15+ admin dashboard modules with JWT authentication, role-based access control, and server-side pagination.</li>
              <li>Developed TravelX&apos;s 12-module Property Manager Dashboard end-to-end before integrating it with live REST APIs.</li>
            </ul>
            <div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>Prisma</span><span>MySQL</span><span>REST APIs</span></div>
          </div>
          <BriefcaseIcon className="experience-icon" />
        </article>
      </section>

      <section className="skills-band" id="skills">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <p className="section-kicker">Skills</p>
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
          <p className="section-kicker">Projects</p>
          <p>From offline AI tools to cloud-native platforms, each project reflects how I approach real constraints, thoughtful interfaces, and dependable systems.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.title}>
              <div className="project-top"><span>{project.number}</span><span className="project-type">Case study</span><CodeBracketIcon /></div>
              <div className="project-visual">
                <Image className="project-image" src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 760px) 90vw, 520px" />
              </div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="projects-more">
          <a className="button button-dark" href="/projects">Explore more Projects <ArrowTopRightOnSquareIcon /></a>
        </div>
      </section>

      <section className="section-shell section-block certifications-block">
        <div className="section-heading">
          <p className="section-kicker">Certifications</p>
        </div>
        <div className="cert-list">
          {certifications.map(([year, title, issuer]) => (
            <div className="cert-row" key={title}><span>{year}</span><CheckBadgeIcon /><strong>{title}</strong><em>{issuer}</em></div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-layout">
          <div className="contact-portrait">
            <Image src="/Me.png" alt="Srimali JayaweeraArachchi" fill sizes="(max-width: 760px) 80vw, 420px" />
          </div>
          <div className="contact-inner">
            <p className="section-kicker light-kicker">Contact</p>
            <p>I&apos;m looking for a software engineering opportunity where I can contribute across the stack, learn from experienced teammates, and help ship products people can rely on.</p>
            <a className="button button-light" href="mailto:jasrimalimadurangani@gmail.com">Say hello <ArrowTopRightOnSquareIcon /></a>
            <div className="contact-details">
              <a href="mailto:jasrimalimadurangani@gmail.com"><EnvelopeIcon /> jasrimalimadurangani@gmail.com</a>
              <a href="tel:+94785684202"><PhoneIcon /> +94 78 568 4202</a>
              <a href="https://github.com/Srimali-JayaweeraArachchi" target="_blank" rel="noreferrer"><CodeBracketIcon /> GitHub / Srimali-JayaweeraArachchi</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitContactForm}>
            <p className="form-kicker">Start a conversation</p>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
            <label>Message<textarea name="message" required minLength={10} placeholder="Tell me a little about the opportunity..." /></label>
            <button className="button button-dark" type="submit">Send message <ArrowTopRightOnSquareIcon /></button>
            <p className="form-status" aria-live="polite">{contactStatus}</p>
          </form>
        </div>
      </section>
      <footer className="footer section-shell">
        <span>Copyright © 2026 Srimali JayaweeraArachchi</span>
        <div className="footer-socials" aria-label="Footer social links">
          <a href="mailto:jasrimalimadurangani@gmail.com" aria-label="Email"><EnvelopeIcon /></a>
          <a href="https://github.com/Srimali-JayaweeraArachchi" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/srimali-jayaweeraarachchi-824937261/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        <span>Designed & built with care.</span>
      </footer>
    </main>
  );
}
