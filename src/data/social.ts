// Central place to update contact + social links.
// TODO: swap githubUsername for the real handle once claimed/confirmed.
export const profile = {
  name: "Gyimah Ramsey Opoku",
  shortName: "Ramsey",
  role: "AI/ML Engineer & Software Developer",
  location: "Kumasi, Ghana",
  school: "Kwame Nkrumah University of Science and Technology (KNUST)",
  degree: "BSc Computer Science, Class of 2027",
  email: "rogyimah1@st.knust.edu.gh",
  githubUsername: "REPLACE_ME",
  linkedin: "https://www.linkedin.com/in/REPLACE_ME",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  { label: "GitHub", href: `https://github.com/${profile.githubUsername}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];
