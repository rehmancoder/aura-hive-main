import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Included } from "@/components/service/Included";
import { Steps } from "@/components/service/Steps";
import { Related } from "@/components/service/Related";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { getDivision, type DivisionId } from "@/lib/divisions";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/env";
import { ld, pageMetadata } from "./shared";

export type ServicePageProps = { params: Promise<{ slug: string }> };

const find = (division: DivisionId, slug: string) => {
  const d = getDivision(division);
  const service = d.services.find((s) => s.slug === slug);
  return service ? { d, service, detail: d.details[service.slug] } : null;
};

/** Every service page is built ahead of time as static HTML. */
export const serviceParams = (division: DivisionId) => getDivision(division).services.map((s) => ({ slug: s.slug }));

export async function serviceMetadata(division: DivisionId, { params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = find(division, slug);
  if (!found) return {};
  const { d, detail } = found;
  return pageMetadata({ title: detail.seoTitle, description: `${detail.intro} ${d.seoSuffix}`, path: d.servicePath(slug) });
}

// With Partial Prefetching, params must be read inside <Suspense> so Next.js can build the
// route's shared App Shell. The known slugs are still fully prerendered as static HTML.
export function ServicePage({ division, params }: ServicePageProps & { division: DivisionId }) {
  return (
    <Suspense fallback={<main id="main" className="relative z-10 min-h-svh" />}>
      <ServiceContent division={division} params={params} />
    </Suspense>
  );
}

async function ServiceContent({ division, params }: ServicePageProps & { division: DivisionId }) {
  const { slug } = await params;
  const found = find(division, slug);
  if (!found) notFound();
  const { d, service, detail } = found;
  const url = `${siteUrl}${d.servicePath(slug)}`;

  // Structured data: the service itself, its place in the site (breadcrumb) and its FAQ answers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: detail.intro,
        url,
        provider: { "@id": `${siteUrl}${d.orgId}` },
        areaServed: site.areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title}: what's included`,
          itemListElement: service.includes.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
      breadcrumbLd(siteUrl, division, [
        { name: "Services", path: d.servicesPath },
        { name: service.title, path: d.servicePath(slug) },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const isConsultancy = division === "consultancy";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas shape={detail.shape} />
      <main id="main" className="relative z-10">
        <ServiceHero division={division} service={service} detail={detail} />
        <Included service={service} />
        <Steps steps={detail.steps} />
        <Faq
          division={division}
          items={detail.faqs}
          title={`${service.title} questions`}
          intro="Something else you'd like to know? Send us your question and we'll get back to you."
        />
        <Related division={division} service={service} />
        <FinalCta
          division={division}
          lines={["Let's talk", `${service.title}.`]}
          body={
            isConsultancy
              ? `Send us your FM contract and site list. In a free consultation, we'll show you what ${service.title} would cover for your buildings.`
              : `Tell us about your business and your goals. We'll send a short ${service.title} plan with a clear proposal.`
          }
          stage={4}
          href={d.contactHref({ service: service.slug })}
        />
      </main>
    </>
  );
}
