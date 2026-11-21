"use client";

import { useRef } from "react";
import { consultancyHome } from "@/lib/consultancy";
import { gsap, useGsap } from "@/lib/motion";

// A sample scorecard in the report preview: service line and a red / amber / green result.
const scorecard = [
  { line: "Hard services (MEP)", score: 0.92, rag: "green" },
  { line: "Cleaning and housekeeping", score: 0.86, rag: "green" },
  { line: "Security and access", score: 0.78, rag: "amber" },
  { line: "Landscaping", score: 0.9, rag: "green" },
  { line: "Pest control", score: 0.64, rag: "red" },
] as const;

const ragColour = { green: "bg-honey", amber: "bg-amber", red: "bg-[#f0a58f]" } as const;

/** Technology and reporting: what we set up, and a live-looking preview of the monthly report. */
export function Reporting() {
  const { technology } = consultancyHome;
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-tool]"), {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: el.querySelector("[data-tools]"), start: "top 82%" },
    });
    gsap.from(el.querySelector("[data-report]"), {
      y: 80,
      rotateX: 18,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el.querySelector("[data-report]"), start: "top 88%" },
    });
    el.querySelectorAll<HTMLElement>("[data-score]").forEach((bar, i) => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.3, delay: i * 0.08, ease: "power3.out", scrollTrigger: { trigger: bar, start: "top 92%" } },
      );
    });
  });

  return (
    <section ref={root} id="reporting" aria-labelledby="reporting-title" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="reporting-title" className="display text-[clamp(2.75rem,7vw,6.5rem)] text-wax">
            {technology.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-wax/70 sm:text-lg">{technology.intro}</p>
          <h3 className="mt-10 text-sm font-semibold text-wax/90">What we set up and use</h3>
          <ul data-tools className="mt-4 space-y-3">
            {technology.setup.map((t) => (
              <li key={t} data-tool className="flex items-start gap-3 text-base leading-snug text-wax/85 sm:text-lg">
                <span aria-hidden className="mt-[0.3em] h-4 w-1.5 shrink-0 rounded-full bg-honey" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="[perspective:1400px] lg:self-center">
          <figure
            data-report
            className="rounded-[24px] border border-wax/12 bg-comb/70 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8 md:rounded-[32px]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-wax/10 pb-5">
              <div>
                <p className="text-sm text-wax/55">Monthly KPI report</p>
                <p className="mt-1 text-lg font-semibold text-wax sm:text-xl">Scorecard by service line</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-honey/30 px-3 py-1.5 text-[13px] text-honey">
                <span aria-hidden className="h-2 w-2 rounded-full bg-honey" />
                Sample
              </span>
            </div>
            <ul className="mt-5 space-y-4" aria-label="Sample scorecard">
              {scorecard.map((s) => (
                <li key={s.line}>
                  <div className="flex items-baseline justify-between gap-4 text-[15px]">
                    <span className="text-wax/85">{s.line}</span>
                    <span className="tabular-nums text-wax/60">
                      {Math.round(s.score * 100)}% <span className="sr-only">({s.rag})</span>
                    </span>
                  </div>
                  <span aria-hidden className="mt-2 block h-2 overflow-hidden rounded-full bg-wax/10">
                    <span data-score className={`block h-full origin-left rounded-full ${ragColour[s.rag]}`} style={{ width: `${s.score * 100}%` }} />
                  </span>
                </li>
              ))}
            </ul>
            <figcaption className="mt-7 border-t border-wax/10 pt-5">
              <p className="text-sm font-semibold text-wax/90">Every monthly report includes</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {technology.report.map((r) => (
                  <li key={r} className="rounded-full border border-wax/12 bg-ink/50 px-3 py-1.5 text-[13px] text-wax/75 sm:text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
