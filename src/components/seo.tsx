import { useEffect } from "react";
import { SALON } from "@/lib/data.ts";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

// Last time the public page content was reviewed (ISO 8601, UTC)
const PUBLISHED = "2026-01-01T00:00:00Z";
const MODIFIED = "2026-09-29T00:00:00Z";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function buildJsonLd(url: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HairSalon",
        "@id": `${window.location.origin}/#salon`,
        name: SALON.name,
        url: `${window.location.origin}/`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SALON.street,
          postalCode: "232 34",
          addressLocality: "Arlöv",
          addressCountry: "SE",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
        sameAs: [SALON.bokadirektUrl],
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: "sv-SE",
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        about: { "@id": `${window.location.origin}/#salon` },
      },
    ],
  };
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = `${window.location.origin}${path}`;
  const jsonLd = JSON.stringify(buildJsonLd(url, title, description));

  // Head tags live outside React's root, so sync them per page
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:locale", "sv_SE");
    upsertMeta("property", "og:site_name", SALON.name);
    upsertMeta("property", "article:modified_time", MODIFIED);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertCanonical(url);
  }, [title, description, url]);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}
