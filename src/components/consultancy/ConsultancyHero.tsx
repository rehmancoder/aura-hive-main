import { Fragment } from "react";
import { FloatingCards } from "../shared/FloatingCards";
import { MagneticLink } from "../motion/Magnetic";
import { consultancy } from "@/lib/divisions";
import { consultancyHome } from "@/lib/consultancy";

// Where each card floats around the particle skyline, and how strongly it follows the pointer.
const spots = [
  { className: "right-[21%] top-[15%]", depth: 28 },
  { className: "right-[3%] top-[33%]", depth: 46 },
  { className: "right-[23%] top-[64%]", depth: 38 },
  { className: "right-[3%] top-[54%]", depth: 20 },
];

/** Consultancy home opening: the promise on the left, a particle skyline of buildings on the right. */
export function ConsultancyHero() {
  const { headline, body } = consultancyHome.hero;
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[max(100svh,620px)] items-end overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-ink/90 via-ink/50 to-transparent md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-ink via-ink/90 to-transparent md:h-1/2 md:via-ink/30"
      />

      <FloatingCards cards={consultancyHome.signals} spots={spots} />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 md:pb-28">
        <div className="max-w-[44rem]">
          <p
            className="fade-rise mb-5 inline-flex items-center gap-2.5 rounded-full border border-honey/30 bg-ink/60 px-4 py-2 text-sm text-wax backdrop-blur-md"
            style={{ animationDelay: "var(--intro)" }}
          >
            <span aria-hidden className="h-3.5 w-1.5 rounded-full bg-honey" />
            Facilities management consultancy
          </p>
          <h1 id="hero-title" className="display text-[clamp(3.1rem,9.6vw,8.5rem)] text-wax">
            {headline.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span
                    className={`word-rise inline-block ${i === headline.length - 1 ? "text-honey" : ""}`}
                    style={{ animationDelay: `calc(var(--intro) + ${80 + i * 80}ms)` }}
                  >
                    {w}
                  </span>
                </span>
                {i < headline.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>
          <p
            className="fade-rise mt-6 max-w-[36rem] text-base leading-relaxed text-wax/80 sm:text-lg md:mt-7 md:text-xl"
            style={{ animationDelay: "calc(var(--intro) + 600ms)" }}
          >
            {body}
          </p>
          <div className="fade-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "calc(var(--intro) + 750ms)" }}>
            <MagneticLink
              href={consultancy.contactHref()}
              className="inline-block rounded-full bg-honey px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-wax sm:px-8"
            >
              Book a free consultation
            </MagneticLink>
            <a
              href="#process"
              className="rounded-full px-5 py-4 text-base font-medium text-wax/85 underline decoration-honey/50 underline-offset-[6px] transition-colors hover:text-honey"
            >
              See how we work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="fade-rise absolute bottom-8 right-5 hidden items-center gap-3 text-sm text-wax/50 sm:right-8 md:flex"
        style={{ animationDelay: "calc(var(--intro) + 1050ms)" }}
      >
        Scroll
        <span className="relative block h-12 w-px overflow-hidden bg-wax/15">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-honey" />
        </span>
      </div>
    </section>
  );
}
