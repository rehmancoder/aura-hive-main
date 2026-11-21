import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { Doors } from "@/components/gateway/Doors";
import { Footer } from "@/components/Footer";
import { ld, pageMetadata } from "@/components/pages/shared";
import { divisions } from "@/lib/divisions";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/env";

export const metadata = pageMetadata({
  title: site.companyTitle,
  description: site.companyDescription,
  path: "/",
  absoluteTitle: true,
});

// Structured data: the company, its two sides and the website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: site.name,
      legalName: site.legalName,
      description: site.companyDescription,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      image: `${siteUrl}/opengraph-image.png`,
      email: site.email,
      areaServed: site.areaServed,
      sameAs: Object.values(site.socials),
      subOrganization: Object.values(divisions).map((d) => ({
        "@id": `${siteUrl}${d.orgId}`,
        name: `${site.name} ${d.name}`,
        url: `${siteUrl}${d.base}`,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

/** Home page: visitors choose Marketing Solutions or Consultancy Solutions. */
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas scene="gateway" />
      <main id="main" className="relative z-10">
        <Doors />
      </main>
      <Footer />
    </>
  );
}
