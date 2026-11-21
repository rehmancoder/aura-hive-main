import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { ScopeColumns } from "@/components/consultancy/ScopeColumns";
import { Kpis } from "@/components/consultancy/Kpis";
import { Standards } from "@/components/consultancy/Standards";
import { Reporting } from "@/components/consultancy/Reporting";
import { Engagements } from "@/components/consultancy/Engagements";
import { Marquee } from "@/components/sections/Marquee";
import { HiveSection } from "@/components/sections/HiveSection";
import { ServicesScroller, type Panel } from "@/components/sections/ServicesScroller";
import { Industries } from "@/components/sections/Industries";
import { Showcase } from "@/components/sections/Showcase";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { ld, pageMetadata } from "@/components/pages/shared";
import { consultancy } from "@/lib/divisions";
import { consultancyFaqs, consultancyHome, consultancyIndustries, consultancyServices } from "@/lib/consultancy";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/env";

export const metadata = pageMetadata({
  title: consultancyHome.seoTitle,
  description: consultancyHome.description,
  path: consultancy.base,
  absoluteTitle: true,
});

// The four service groups as the home page's main-service panels, each listing its services.
const panels: Panel[] = consultancy.groups.map((g) => ({
  key: g.id,
  title: g.title,
  body: g.intro,
  word: g.items[0].word,
  tags: [],
  href: `${consultancy.servicesPath}#${g.id}`,
  linkLabel: `Explore ${g.title}`,
  links: g.items.map((s) => ({ label: s.title, href: consultancy.servicePath(s.slug) })),
}));

// Structured data: this side of the business, the services it offers, who it serves and FAQ answers.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}${consultancy.orgId}`,
      name: `${site.name} Consultancy Solutions`,
      description: consultancyHome.description,
      url: `${siteUrl}${consultancy.base}`,
      logo: `${siteUrl}/icon.svg`,
      image: `${siteUrl}/opengraph-image.png`,
      email: site.email,
      areaServed: site.areaServed,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [...consultancyServices.map((s) => s.title), ...consultancyHome.standards.items.map((s) => s.code)],
      audience: consultancyIndustries.map((i) => ({ "@type": "BusinessAudience", audienceType: i.name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Facilities management consultancy services",
        itemListElement: consultancyServices.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body, url: `${siteUrl}${consultancy.servicePath(s.slug)}` },
        })),
      },
    },
    breadcrumbLd(siteUrl, "consultancy", []),
    {
      "@type": "FAQPage",
      mainEntity: consultancyFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ConsultancyHome() {
  const { needs, pillars, showcase, process } = consultancyHome;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas scene="consultancyHome" />
      <main id="main" className="relative z-10">
        <ConsultancyHero />
        <Marquee items={consultancyHome.marquee} label="Our consultancy services" />
        <HiveSection id="needs" title={needs.title} statement={needs.statement} items={needs.items} />
        <ServicesScroller title={pillars.title} body={pillars.intro} allHref={consultancy.servicesPath} panels={panels} />
        <Industries
          items={consultancyIndustries}
          title="Industries we support"
          intro="Six sectors, each with its own risks, rules and standards. We map every site to international standards and local law."
        />
        <Showcase
          lines={showcase.lines}
          body={showcase.body}
          image="/images/consultancy/showcase.webp"
          alt="Gold and black blocks rising in an ordered grid, like a city of buildings"
        />
        <ScopeColumns />
        <Process
          title={process.title}
          intro={process.intro}
          steps={process.steps}
          includedTitle={process.includedTitle}
          included={process.included}
        />
        <Kpis />
        <Standards />
        <Reporting />
        <Engagements title="Four ways to work with us" intro="Choose the engagement that fits your buildings. Many owners start with an audit, then move to a monthly retainer." />
        <Marquee items={consultancyHome.standards.items.map((s) => s.code)} reverse outline label="Standards we work to" />
        <Faq division="consultancy" title="Questions owners ask us" />
        <FinalCta division="consultancy" />
      </main>
    </>
  );
}
