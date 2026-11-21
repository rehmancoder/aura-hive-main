import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { ContactHero } from "@/components/contact/ContactHero";
import { LookAround } from "@/components/contact/LookAround";
import { Steps } from "@/components/service/Steps";
import { Faq } from "@/components/sections/Faq";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { getDivision, type DivisionId } from "@/lib/divisions";
import { getContactCopy } from "@/lib/pages";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/env";
import { ld, pageMetadata } from "./shared";

export const contactMetadata = (division: DivisionId) => {
  const copy = getContactCopy(division);
  return pageMetadata({ title: copy.title, description: copy.description, path: getDivision(division).contactPath });
};

export function ContactPage({ division }: { division: DivisionId }) {
  const d = getDivision(division);
  const copy = getContactCopy(division);
  const url = `${siteUrl}${d.contactPath}`;

  // Structured data: a contact page for this side of the business, with how to reach it and FAQ answers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        url,
        name: `${copy.title} | ${site.name}`,
        description: copy.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: {
          "@id": `${siteUrl}${d.orgId}`,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: division === "consultancy" ? "customer service" : "sales",
            email: site.email,
            availableLanguage: ["English"],
            areaServed: site.areaServed,
          },
        },
        breadcrumb: breadcrumbLd(siteUrl, division, [{ name: "Contact us", path: d.contactPath }]),
      },
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
      <BackgroundCanvas scene="contact" />
      <main id="main" className="relative z-10">
        <ContactHero division={division} />
        <Steps steps={copy.steps} title="What happens next" stage={1} />
        <Faq
          division={division}
          items={copy.faqs}
          title="Before you get in touch"
          intro="Quick answers to what people usually ask before sending an enquiry."
          stage={2}
          contactLink={false}
        />
        <LookAround division={division} />
      </main>
    </>
  );
}
