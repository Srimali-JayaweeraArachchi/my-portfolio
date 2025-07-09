export interface Project {
  title: string;
  description: string;
  technologies: string[]; //array of strings
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readTime: string; // e.g., "5 min read"
  slug: string;
}
