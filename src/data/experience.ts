export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    org: "Remote Internship I",
    role: "Software / ML Intern",
    period: "Fall 2026",
    location: "Remote",
    description: "Update with the team, stack, and what you're shipping.",
    current: true,
  },
  {
    org: "Remote Internship II",
    role: "Software / ML Intern",
    period: "Fall 2026",
    location: "Remote",
    description: "Update with the team, stack, and what you're shipping.",
    current: true,
  },
  {
    org: "Remote Internship III",
    role: "Software / ML Intern",
    period: "Fall 2026",
    location: "Remote",
    description: "Update with the team, stack, and what you're shipping.",
    current: true,
  },
  {
    org: "Prior Internship",
    role: "Software Engineering Intern",
    period: "2024",
    location: "Ghana",
    description: "Update with the company name and a one-line highlight of the work.",
  },
];

export const education = {
  school: "Kwame Nkrumah University of Science and Technology",
  degree: "BSc Computer Science",
  period: "2023 — 2027",
  detail: "Coursework and independent focus on machine learning, algorithms, and applied AI.",
};
