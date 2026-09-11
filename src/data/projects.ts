// Placeholder projects — replace once GitHub username is confirmed.
// Run `node scripts/fetch-github-repos.mjs <username>` to regenerate this
// file automatically from your public repos (see script for details).
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  size: "lg" | "md" | "sm";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Crop Disease Classifier",
    description:
      "CNN-based image classifier that flags common crop diseases from leaf photos, trained on an augmented local dataset and served through a lightweight inference API.",
    tags: ["Python", "PyTorch", "Computer Vision"],
    href: "#",
    size: "lg",
    featured: true,
  },
  {
    title: "Campus Marketplace API",
    description: "REST API powering a student-to-student marketplace, with auth, search, and image uploads.",
    tags: ["Node.js", "PostgreSQL", "Express"],
    href: "#",
    size: "sm",
  },
  {
    title: "Sentiment Pipeline",
    description: "NLP pipeline for classifying sentiment in Twi/English code-switched text.",
    tags: ["NLP", "scikit-learn", "Pandas"],
    href: "#",
    size: "sm",
  },
  {
    title: "Study Room Scheduler",
    description:
      "Full-stack booking tool for shared study spaces on campus, with real-time availability and conflict resolution.",
    tags: ["React", "TypeScript", "Firebase"],
    href: "#",
    size: "md",
  },
  {
    title: "ML Model Zoo Notebooks",
    description: "A growing collection of annotated notebooks exploring classic and modern ML architectures.",
    tags: ["Jupyter", "TensorFlow", "Research"],
    href: "#",
    size: "md",
  },
];
