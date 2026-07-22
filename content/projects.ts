/** Project registry (order = display order). Copy in dictionaries. */
export const projectSlugs = [
  "telecom-automation",
  "ai-backend",
  "web-platform-qe",
  "public-sector",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

/** Which projects appear on the homepage. */
export const featuredProjects: ProjectSlug[] = [
  "telecom-automation",
  "ai-backend",
  "web-platform-qe",
];
