import Link from "next/link";
import { Fragment } from "react";
import { TiltCard } from "../motion/TiltCard";
import { divisions } from "@/lib/divisions";

const doors = [
  {
    d: divisions.marketing,
    eyebrow: "For brands that want to grow",
    highlights: ["Google Ads", "Meta Ads", "Social media", "Branding", "AI video", "CRM automation"],
  },
  {
    d: divisions.consultancy,
    eyebrow: "For owners of buildings, hotels and resorts",
    highlights: ["FM consultancy", "SLAs and KPIs", "Audits", "HSE and fire safety", "ISO and IMS", "Guest experience"],
  },
] as const;

/**
 * The home page: two doors, Marketing Solutions and Consultancy Solutions, either side of the gold logo.
 * Hovering one door dims the other.
 */
export function Doors() {
  return (
    <section aria-labelledby="gateway-title" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 md:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="fade-rise text-[13px] font-medium uppercase tracking-[0.18em] text-honey/85 sm:text-sm" style={{ animationDelay: "var(--intro)" }}>
            Aura Hive Creative Solutions L.L.C
          </p>
          <h1 id="gateway-title" className="display mx-auto mt-4 max-w-4xl text-[clamp(2.75rem,6vw,5.25rem)] text-wax">
            {["Marketing", "and", "consultancy,", "under", "one", "hive."].map((w, i, all) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span
                    className={`word-rise inline-block ${i === all.length - 1 ? "text-honey" : ""}`}
                    style={{ animationDelay: `calc(var(--intro) + ${80 + i * 70}ms)` }}
                  >
                    {w}
                  </span>
                </span>
                {i < all.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>
          <p className="fade-rise mx-auto mt-4 max-w-md text-base text-wax/70 sm:text-lg" style={{ animationDelay: "calc(var(--intro) + 550ms)" }}>
            Choose where you&apos;d like to start.
          </p>
        </div>

        <ul className="mt-[30svh] grid gap-4 [perspective:1600px] md:mt-10 md:grid-cols-[minmax(0,1fr)_minmax(9rem,18vw)_minmax(0,1fr)] md:gap-0 [&:has(a:hover)_a:not(:hover)]:opacity-55">
          {doors.map(({ d, eyebrow, highlights }, i) => (
            <li
              key={d.id}
              className={`fade-rise ${i === 1 ? "md:col-start-3" : ""}`}
              style={{ animationDelay: `calc(var(--intro) + ${700 + i * 150}ms)` }}
            >
              <Link href={d.base} className="group block h-full transition-opacity duration-500" aria-label={`Enter ${d.name}`}>
                <TiltCard
                  className="h-full rounded-[28px] border border-wax/12 bg-comb/60 p-6 backdrop-blur-xl transition-colors duration-500 group-hover:border-honey/60 sm:p-8 md:rounded-[36px] lg:p-9"
                  innerClassName="flex h-full min-h-[20rem] flex-col justify-between gap-8 lg:min-h-[22rem]"
                >
                  <div>
                    <p className="flex items-center gap-3 text-sm font-medium text-honey">
                      <span className="display text-[1.75rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
                      <span aria-hidden className="h-4 w-[2px] rounded-full bg-honey/50" />
                      {eyebrow}
                    </p>
                    <h2 className="display mt-5 text-[clamp(3rem,5vw,4.5rem)] text-wax">
                      {d.short}
                      <span className="block text-honey">Solutions</span>
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-wax/75 sm:text-lg">{d.summary}</p>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2" aria-label={`${d.name} highlights`}>
                      {highlights.map((h) => (
                        <li key={h} className="rounded-full border border-wax/12 bg-ink/50 px-3 py-1.5 text-[13px] text-wax/80 sm:text-sm">
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex items-center gap-3 rounded-full bg-honey px-6 py-3.5 text-base font-semibold text-ink transition-colors group-hover:bg-wax">
                      Enter {d.short}
                      <svg aria-hidden viewBox="0 0 16 12" className="h-3 w-4 transition-transform duration-500 group-hover:translate-x-1">
                        <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
