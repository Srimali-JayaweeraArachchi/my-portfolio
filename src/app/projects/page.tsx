import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <nav className="nav" aria-label="Projects navigation">
        <Link className="brand" href="/#top">SJ<span>.</span><strong>Portfolio</strong></Link>
        <Link className="text-link dark-link" href="/#projects"><ArrowLeftIcon /> Back to portfolio</Link>
      </nav>
      <header className="section-shell projects-page-heading">
        <p className="section-kicker">All projects</p>
        <p>Explore a selection of systems I have designed and built across full-stack engineering, AI, and cloud technologies, with a focus on useful outcomes and thoughtful implementation.</p>
      </header>
      <section className="section-shell projects-grid all-projects-grid">
        {projects.map(({ number, title, eyebrow, description, technologies, accent, image }) => (
          <article className={`project-card project-${accent}`} key={title}>
            <div className="project-top"><span>{number}</span><CodeBracketIcon /></div>
            <div className="project-visual">
              <Image className="project-image" src={image} alt={`${title} project`} fill sizes="(max-width: 760px) 90vw, 520px" />
            </div>
            <p className="project-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="project-description">{description}</p>
            <div className="tag-row">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </article>
        ))}
      </section>
      <div className="projects-page-footer section-shell">
        <Link className="button button-dark" href="/#contact">Let&apos;s work together <ArrowTopRightOnSquareIcon /></Link>
      </div>
    </main>
  );
}
