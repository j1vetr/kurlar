import { SITE_URL } from "./head";

/**
 * Brand source of truth — only facts verifiable on the site itself
 * (contact page, footer, about page history). Anything not listed here
 * (ratings, awards, revenue, unverified social handles) must NOT appear
 * in structured data or meta tags.
 */
export const BRAND = {
  /** Entity name as registered on Google Maps (see Contact page embed). */
  name: "Kurlar Dalgıç Pompa & Motor",
  alternateName: "Kurlar Pompa",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  email: "info@kurlar.com.tr",
  /** E.164-style for structured data. */
  telephone: "+90 232 512 30 30",
  phoneDisplay: "+90 (232) 512 30 30",
  phoneHref: "tel:902325123030",
  address: {
    streetAddress: "İbni Melek OSB Mah. Tosbi Yol 5. Sok. No: 5",
    addressLocality: "Tire",
    addressRegion: "İzmir",
    postalCode: undefined as string | undefined, // not published on the site
    addressCountry: "TR",
  },
  foundingDate: "1975",
  founder: "Yaşar Kurfeyiz",
  /** Social profiles linked from the footer. */
  sameAs: [
    "https://www.linkedin.com/company/kurlar-pompa/",
    "https://www.facebook.com/kurlarpompa/",
    "https://www.instagram.com/kurlarpompa/",
  ],
} as const;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Full Organization node. Product pages reference it via
 * {"@id": ORGANIZATION_ID}; this node is emitted on the home page.
 */
export function organizationJsonLd(en: boolean): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BRAND.name,
    alternateName: BRAND.alternateName,
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      url: BRAND.logo,
    },
    description: en
      ? "Turkish manufacturer of submersible pumps and submersible motors since 1975, exporting to more than 40 countries."
      : "1975’ten beri dalgıç pompa ve dalgıç motor üreticisi; 40’tan fazla ülkeye ihracat.",
    foundingDate: BRAND.foundingDate,
    founder: {
      "@type": "Person",
      name: BRAND.founder,
    },
    email: BRAND.email,
    telephone: BRAND.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.streetAddress,
      addressLocality: BRAND.address.addressLocality,
      addressRegion: BRAND.address.addressRegion,
      addressCountry: BRAND.address.addressCountry,
    },
    sameAs: [...BRAND.sameAs],
  };
}

export function webSiteJsonLd(en: boolean): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND.name,
    url: BRAND.url,
    inLanguage: en ? "en" : "tr-TR",
    publisher: { "@id": ORGANIZATION_ID },
  };
}
