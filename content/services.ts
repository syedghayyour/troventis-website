import { ShieldCheck, Cpu, Cloud, Code, Compass, type LucideIcon } from "lucide-react";

/** Consulting domain registry (R1 repositioning). Copy in dictionaries. */
export const domainSlugs = [
  "quality-engineering",
  "ai-engineering",
  "cloud-devops",
  "digital-engineering",
  "technology-advisory",
] as const;

export type DomainSlug = (typeof domainSlugs)[number];

export const domainIcons: Record<DomainSlug, LucideIcon> = {
  "quality-engineering": ShieldCheck,
  "ai-engineering": Cpu,
  "cloud-devops": Cloud,
  "digital-engineering": Code,
  "technology-advisory": Compass,
};

/** The flagship domain gets visual weight (Strategy §5.1). */
export const flagshipDomain: DomainSlug = "quality-engineering";
