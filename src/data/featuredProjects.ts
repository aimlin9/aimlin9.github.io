export type FeaturedProject = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  stat: { value: string; label: string };
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AgroSense",
    description:
      "Crop-disease detection and advisory tool for smallholder farmers in West Africa. Fine-tuned MobileNetV2 on the 54,000-image PlantVillage dataset via two-phase transfer learning, exported as a 2.7MB on-device TFLite model, and paired with a FastAPI backend and Gemini to turn predictions into farmer-friendly treatment advice.",
    tags: ["PyTorch / TensorFlow", "TFLite", "FastAPI", "React Native"],
    href: "https://github.com/aimlin9/agrosense",
    stat: { value: "97.3%", label: "Validation accuracy, 2.7MB on-device model" },
  },
  {
    title: "Cross-School Federated Learning",
    description:
      "Privacy-preserving federated learning system for student-progress tracking across schools, using Flower, PyTorch, and Opacus differential privacy. Fixed a gradient-extraction crash in the client pipeline and re-engineered the Paillier key size (2048-bit → 1024-bit).",
    tags: ["Flower", "PyTorch", "Opacus", "Paillier HE"],
    href: "https://github.com/FrimpongYawKankam/project12-fl-ghana",
    stat: { value: "6.4x", label: "Faster aggregation per round (341s → 53s)" },
  },
  {
    title: "FinTrack Ghana",
    description:
      "Finance dashboard that automatically parses Ghanaian bank statements (GCB, Ecobank, MTN MoMo, Absa, Fidelity) with a spaCy NLP transaction categorizer, a Django REST/JWT backend, and Gemini-generated spending advice.",
    tags: ["Django REST", "spaCy NLP", "React", "Gemini API"],
    href: "https://github.com/aimlin9/finance-dashboard",
    stat: { value: "5 banks", label: "Ghanaian statement formats parsed automatically" },
  },
];
