import {
  ShieldCheck,
  FlaskConical,
  Cpu,
  Cloud,
  Code,
  type LucideIcon,
} from "lucide-react";

/** Service registry: slugs + icons. Copy lives in the locale dictionaries. */
export const serviceSlugs = [
  "quality-engineering",
  "test-automation",
  "ai-solutions",
  "cloud-devops",
  "software-development",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "quality-engineering": ShieldCheck,
  "test-automation": FlaskConical,
  "ai-solutions": Cpu,
  "cloud-devops": Cloud,
  "software-development": Code,
};
