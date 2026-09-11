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
    title: "AgroSense",
    description:
      "Crop-disease detection and advisory tool for smallholder farmers. Fine-tuned MobileNetV2 on the 54,000-image PlantVillage dataset via two-phase transfer learning to 97.3% validation accuracy, then quantized to a 2.7MB on-device TFLite model served through FastAPI, with Gemini turning predictions into farmer-friendly treatment advice.",
    tags: ["PyTorch/TensorFlow", "TFLite", "FastAPI"],
    href: "https://github.com/aimlin9/agrosense",
    size: "lg",
    featured: true,
  },
  {
    title: "Cross-School Federated Learning",
    description:
      "Privacy-preserving federated learning system for student-progress tracking across schools. Fixed a gradient-extraction crash in the client pipeline and re-engineered the Paillier key size (2048-bit → 1024-bit), cutting per-round aggregation time ~6.4x (341s → 53s) with no loss to the privacy guarantee.",
    tags: ["Flower", "PyTorch", "Opacus"],
    href: "https://github.com/FrimpongYawKankam/project12-fl-ghana",
    size: "md",
  },
  {
    title: "FinTrack Ghana",
    description:
      "Finance dashboard that parses Ghanaian bank statements (GCB, Ecobank, MTN MoMo, Absa, Fidelity) with a spaCy NLP categorizer and turns spending patterns into plain-English advice via Gemini.",
    tags: ["Django REST", "spaCy", "React"],
    href: "https://github.com/aimlin9/finance-dashboard",
    size: "md",
  },
  {
    title: "AKS-FedAvg",
    description:
      "IEEE-targeted research proposal on adaptive Paillier homomorphic-encryption key-sizing for federated learning, balancing cryptographic security against aggregation performance. Supervised by Dr. Eric Opoku Osei, KNUST.",
    tags: ["Research", "Paillier HE", "Flower"],
    href: "https://github.com/aimlin9/aks-fedavg",
    size: "sm",
  },
  {
    title: "SnapSell POS",
    description:
      "Role-based point-of-sale system for retail. Owned the sales-processing module: tax calculation, cash/card/mobile-money checkout, Paystack QR payments, and stock sync via webhooks.",
    tags: ["Next.js", "Prisma", "tRPC"],
    href: "https://github.com/aimlin9/sop-capstone-project",
    size: "sm",
  },
  {
    title: "HCI Task Manager",
    description:
      "Desktop task manager built to apply human-computer interaction principles — Norman's model and usability heuristics — directly to interface design decisions.",
    tags: ["Python", "CustomTkinter", "HCI"],
    href: "https://github.com/aimlin9/hci_task_manager",
    size: "sm",
  },
];
