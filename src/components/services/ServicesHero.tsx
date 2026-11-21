import { MagneticLink } from "../motion/Magnetic";
import { Breadcrumb } from "../shared/Breadcrumb";
import { GroupMark } from "../shared/GroupMark";
import { getDivision, type DivisionId } from "@/lib/divisions";
import { getServicesCopy } from "@/lib/pages";

export function ServicesHero({ division }: { division: DivisionId }) {
  const d = getDivision(division);
  const servicesPage = getServicesCopy(division);
  return (
    <section aria-labelledby="services-hero-title" className="relative flex min-h-[max(100svh,640px)] items-end overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-ink/90 via-ink/50 to-transparent md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-ink via-ink/90 to-transparent md:h-1/2 md:via-ink/30"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 md:pb-24">
        <Breadcrumb division={division} trail={[{ label: "Services" }]} />

        <div className="max-w-[44rem]">
          <h1 id="services-hero-title" className="display text-[clamp(3.25rem,10vw,8.5rem)] text-wax">
            {servicesPage.hero.headline.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                <span
                  className={`word-rise inline-block ${i < 2 ? "text-honey" : ""}`}
                  style={{ animationDelay: `calc(var(--intro) + ${80 + i * 70}ms)` }}
                >
                  {w}
                </span>
                {i < servicesPage.hero.headline.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p
            className="fade-rise mt-6 max-w-[34rem] text-base leading-relaxed text-wax/80 sm:text-lg md:mt-7 md:text-xl"
            style={{ animationDelay: "calc(var(--intro) + 600ms)" }}
          >
            {servicesPage.hero.body}
          </p>
        </div>

        {/* Jump to a group */}
        <div className="fade-rise mt-9 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" style={{ animationDelay: "calc(var(--intro) + 750ms)" }}>
          <ul className="flex flex-wrap gap-2.5" aria-label="Service groups">
            {d.groups.map((g, gi) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="group flex items-center gap-3 rounded-full border border-wax/15 bg-ink/50 py-2.5 pl-3.5 pr-5 text-[15px] text-wax backdrop-blur-md transition-colors hover:border-honey/60 hover:text-honey"
                >
                  <GroupMark index={gi} total={d.groups.length} />
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
          <MagneticLink
            href={d.contactHref()}
            className="inline-block w-fit rounded-full bg-honey px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-wax sm:px-8"
          >
            {d.cta}
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
