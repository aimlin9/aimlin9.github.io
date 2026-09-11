export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  {
    title: "AKS-FedAvg",
    description:
      "IEEE-targeted research proposal on adaptive Paillier homomorphic-encryption key-sizing for federated learning, balancing cryptographic security against aggregation performance. Supervised by Dr. Eric Opoku Osei, KNUST.",
    tags: ["Research", "Paillier HE", "Flower"],
    href: "https://github.com/aimlin9/aks-fedavg",
    size: "lg",
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
