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
    org: "Learn Depth Academy",
    role: "Advanced Machine Learning Research Intern",
    period: "Fall 2026",
    location: "Remote · India",
    description:
      "Researching document intelligence: recovering structure and text from damaged or poorly scanned pages while explicitly flagging regions that can't be reliably recovered, rather than letting a model guess. Combines OCR, masked-language-model reconstruction, and confidence calibration (CER/WER + Expected Calibration Error).",
    current: true,
  },
  {
    org: "Nex Africa",
    role: "Data / ML Intern",
    period: "Fall 2026",
    location: "Remote · Cape Coast, Ghana",
    description:
      "Just getting started — working with a customer churn dataset, building out the early modeling and analysis pipeline.",
    current: true,
  },
  {
    org: "Analyst Lab",
    role: "Data Analyst Intern",
    period: "Fall 2026",
    location: "Remote · Lagos, Nigeria",
    description: "Incoming — starting shortly.",
    current: true,
  },
  {
    org: "KNUST UITS",
    role: "Software Development Intern",
    period: "Oct – Dec 2025",
    location: "Kumasi, Ghana",
    description:
      "Built authentication and database-management modules for internal university platforms with ASP.NET Core MVC and C#, taking features from schema design through deployment, and tuned SQL-backed logic for tools used campus-wide.",
  },
  {
    org: "PasJack Enterprise",
    role: "Network Freelancer Intern",
    period: "Jun – Dec 2024",
    location: "Ghana",
    description:
      "Designed high-level network infrastructure plans for scalability, security, and performance, with a focus on Wi-Fi and mobile network design. Monitored traffic with Wireshark and SolarWinds and resolved connectivity issues.",
  },
];

export const education = {
  school: "Kwame Nkrumah University of Science and Technology",
  degree: "BSc Computer Science",
  period: "Expected September 2027",
  detail: "Coursework and independent focus on machine learning, distributed systems, and applied AI.",
};
