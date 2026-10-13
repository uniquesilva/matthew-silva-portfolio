import {
  configuredUrl,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/data/site";

export function JsonLd() {
  const sameAs = [configuredUrl(LINKEDIN_URL), configuredUrl(GITHUB_URL)].filter(
    (url): url is string => Boolean(url),
  );
  const email = configuredUrl(EMAIL);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: "AI Product Developer",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        ...(email ? { email } : {}),
        ...(sameAs.length > 0 ? { sameAs } : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: "La Quinta",
          addressRegion: "CA",
          addressCountry: "US",
        },
        knowsAbout: [
          "AI products",
          "Product development",
          "Automation",
          "Web applications",
          "iOS applications",
          "APIs",
          "Blockchain payments",
        ],
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
