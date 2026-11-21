import { BackgroundCanvas } from "@/components/three/BackgroundCanvas";
import { AboutHero } from "@/components/about/AboutHero";
import { NameStory } from "@/components/about/NameStory";
import { Mission } from "@/components/about/Mission";
import { Values } from "@/components/about/Values";
import { OnlineModel } from "@/components/about/OnlineModel";
import { ServicesOverview } from "@/components/about/ServicesOverview";
import { Team } from "@/components/about/Team";
import { Marquee } from "@/components/sections/Marquee";
import { FinalCta } from "@/components/sections/FinalCta";
import { breadcrumbLd } from "@/components/shared/Breadcrumb";
import { getDivision, type DivisionId } from "@/lib/divisions";
import { getAbout } from "@/lib/pages";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/env";
import { ld, pageMetadata } from "./shared";

export const aboutMetadata = (division: DivisionId) => {
  const about = getAbout(division);
  return pageMetadata({ title: about.title, description: about.description, path: getDivision(division).aboutPath });
};

export function AboutPage({ division }: { division: DivisionId }) {
  const d = getDivision(division);
  const about = getAbout(division);
  const url = `${siteUrl}${d.aboutPath}`;

  // Structured data: the About page of this side of the business, with its breadcrumb trail.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        url,
        name: `${about.title} | ${site.name}`,
        description: about.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}${d.orgId}` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      { "@id": `${url}#breadcrumb`, ...breadcrumbLd(siteUrl, division, [{ name: "About us", path: d.aboutPath }]) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(jsonLd)} />
      <BackgroundCanvas scene="about" />
      <main id="main" className="relative z-10">
        <AboutHero division={division} />
        <Marquee items={about.marquee} label="What we bring" />
        <NameStory division={division} />
        <Mission division={division} />
        <Values division={division} />
        <OnlineModel division={division} />
        {"team" in about ? <Team team={about.team} /> : null}
        <ServicesOverview division={division} />
        <FinalCta division={division} lines={about.cta.lines} body={about.cta.body} stage={4} />
      </main>
    </>
  );
}
