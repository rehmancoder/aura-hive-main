import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceGroup } from "@/components/services/ServiceGroup";
import { Combos } from "@/components/services/Combos";
import { Engagements } from "@/components/consultancy/Engagements";
import { Marquee } from "@/components/sections/Marquee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { getDivision, type DivisionId } from "@/lib/divisions";
import { getServicesCopy } from "@/lib/pages";
import { site, tools } from "@/lib/site";
import { consultancyHome, consultancyServicesPage } from "@/lib/consultancy";
import { siteUrl } from "@/lib/env";
import { ld, pageMetadata } from "./shared";

export const servicesMetadata = (division: DivisionId) => {
  const copy = getServicesCopy(division);
  return pageMetadata({ title: copy.title, description: copy.description, path: getDivision(division).servicesPath });
};

export function ServicesPage({ division }: { division: DivisionId }) {
  const d = getDivision(division);
  const copy = getServicesCopy(division);
  const url = `${siteUrl}${d.servicesPath}`;
  const isConsultancy = division === "consultancy";

  // Structured data: the list of services (each linking to its own page), breadcrumb and FAQ answers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${copy.title} | ${site.name}`,
        description: copy.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}${d.orgId}` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: d.services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.body,
            url: `${siteUrl}${d.servicePath(s.slug)}`,
            serviceType: s.title,
            provider: { "@id": `${siteUrl}${d.orgId}` },
          },
        })),
      },
      { "@id": `${url}#breadcrumb`, ...breadcrumbLd(siteUrl, division, [{ name: "Services", path: d.servicesPath }]) },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas scene={isConsultancy ? "consultancyServices" : "services"} />
      <main id="main" className="relative z-10">
        <ServicesHero division={division} />
        {isConsultancy ? (
          <Marquee items={consultancyHome.standards.items.map((s) => s.code)} outline label="Standards we work to" />
        ) : (
          <Marquee items={tools} outline label="Platforms we work with" />
        )}
        {d.groups.map((g, i) => (
          <ServiceGroup key={g.id} division={division} index={i} stage={i + 1} />
        ))}
        {isConsultancy ? (
          <>
            <Combos division={division} stage={null} />
            <Engagements title={consultancyServicesPage.engagement.title} intro={consultancyServicesPage.engagement.intro} />
          </>
        ) : (
          <Combos division={division} />
        )}
        <Faq
          division={division}
          items={copy.faqs}
          title="Questions about our services"
          intro="Still deciding? Send us your question and we'll point you to the right service."
        />
        <FinalCta division={division} lines={copy.cta.lines} body={copy.cta.body} stage={5} />
      </main>
    </>
  );
}
