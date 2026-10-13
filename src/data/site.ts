/**
 * Central site configuration.
 *
 * Import URLs from this file only. Do not hard-code them in components.
 */

export const SITE_NAME = "Matthew Silva";
export const ROLE_LINE = "AI Product Developer · Technical Product Builder";
export const HEADLINE = "I build AI products from idea to production.";
export const SUBHEADLINE =
  "I design, develop, integrate, test and deploy real world AI applications, automation systems and digital products.";
export const SITE_TITLE = "Matthew Silva | AI Product Developer";
export const SITE_DESCRIPTION =
  "AI product developer and technical product builder creating production AI applications, automation systems, APIs, web products and iOS applications.";
export const LOCATION = "La Quinta, California";

/** Production origin. Used for canonical URLs, Open Graph, sitemap, and robots. */
export const SITE_URL = "https://matthewsilva.website";
export const SITE_DOMAIN_LABEL = "matthewsilva.website";

export const LINKEDIN_URL = "https://www.linkedin.com/in/matthewsilvaweb3dev/";

export const GITHUB_URL = "https://github.com/uniquesilva";

export const EMAIL = "uniquesilva4@gmail.com";

/** Served from public/resume.pdf. */
export const RESUME_URL = "/resume.pdf";

export const ROLE = "Founder / Product Builder / Lead Developer";

export function configuredUrl(url: string): string | null {
  const value = url.trim();
  if (!value || value.includes("REPLACE_ME")) return null;
  return value;
}

export const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: RESUME_URL },
  { label: "Contact", href: "/#contact" },
] as const;

export type ContactLink = {
  label: string;
  href: string | null;
  external: boolean;
};

export function contactLinks(): ContactLink[] {
  const linkedin = configuredUrl(LINKEDIN_URL);
  const github = configuredUrl(GITHUB_URL);
  const email = configuredUrl(EMAIL);

  return [
    { label: "Resume", href: RESUME_URL, external: true },
    { label: "LinkedIn", href: linkedin, external: true },
    { label: "GitHub", href: github, external: true },
    {
      label: "Email",
      href: email ? `mailto:${email}` : null,
      external: false,
    },
  ];
}
