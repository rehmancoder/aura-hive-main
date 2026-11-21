import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { HiveSection } from "@/components/sections/HiveSection";
import { ServicesScroller } from "@/components/sections/ServicesScroller";
import { Industries } from "@/components/sections/Industries";
import { Showcase } from "@/components/sections/Showcase";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { ld, pageMetadata } from "@/components/pages/shared";
import { faqs, industries, marketingBase, marqueeServices, services, site, tools } from "@/lib/site";
import { siteUrl } from "@/lib/env";

export const metadata = pageMetadata({ title: site.title, description: site.description, path: marketingBase, absoluteTitle: true });

// Structured data: helps Google show the business, services and FAQ answers in results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // Fully online business: no shop or office, so no street address or opening hours.
      "@type": "OnlineBusiness",
      "@id": `${siteUrl}${marketingBase}#business`,
      name: `${site.name} Marketing Solutions`,
      description: site.description,
      url: `${siteUrl}${marketingBase}`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      logo: `${siteUrl}/icon.svg`,
      image: `${siteUrl}/opengraph-image.png`,
      email: site.email,
      areaServed: site.areaServed,
      sameAs: Object.values(site.socials),
      knowsAbout: services.map((s) => s.title),
      audience: industries.map((i) => ({ "@type": "BusinessAudience", audienceType: i.name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital marketing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    breadcrumbLd(siteUrl, "marketing", []),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function MarketingHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas scene="home" />
      <main id="main" className="relative z-10">
        <Hero />
        <Marquee items={marqueeServices} label="Our services" />
        <HiveSection />
        <ServicesScroller />
        <Industries />
        <Showcase />
        <Process />
        <Marquee items={tools} reverse outline label="Platforms we work with" />
        <Faq division="marketing" stage={4} />
        <FinalCta division="marketing" />
      </main>
    </>
  );
}
