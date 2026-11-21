"use client";

import { useRef } from "react";
import { consultancyHome } from "@/lib/consultancy";
import { gsap, useGsap } from "@/lib/motion";

// Column heights mirror the logo: short, tall, short (desktop only).
const heights = ["lg:min-h-[30rem]", "lg:min-h-[36rem]", "lg:min-h-[30rem]"];

/** What we review on site: hard services, soft services and specialist operations, as three rising columns. */
export function ScopeColumns() {
  const { scope } = consultancyHome;
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    const mm = gsap.matchMedia();
    const cols = el.querySelectorAll("[data-col]");
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        cols,
        { clipPath: "inset(100% 0% 0% 0% round 32px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          ease: "none",
          stagger: 0.15,
          scrollTrigger: { trigger: el.querySelector("[data-cols]"), start: "top 85%", end: "top 35%", scrub: true },
        },
      );
      el.querySelectorAll<HTMLElement>("[data-col]").forEach((c) => {
        gsap.from(c.querySelectorAll("li"), {
          x: -20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: c, start: "top 55%" },
        });
      });
    });
    mm.add("(max-width: 1023px)", () => {
      cols.forEach((c) =>
        gsap.from(c, { y: 50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 88%" } }),
      );
    });
    return () => mm.revert();
  });

  return (
    <section ref={root} id="scope" aria-labelledby="scope-title" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="scope-title" className="display max-w-3xl text-[clamp(2.75rem,7vw,6.5rem)] text-wax">
            {scope.title}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-wax/70 sm:text-lg">{scope.intro}</p>
        </div>

        <ul data-cols className="mt-12 grid gap-4 md:mt-20 lg:grid-cols-3 lg:items-end lg:gap-5">
          {scope.items.map((c, i) => (
            <li
              key={c.title}
              data-col
              className={`flex flex-col justify-between gap-10 rounded-[24px] border p-6 backdrop-blur-md sm:p-8 md:rounded-[32px] lg:p-10 ${heights[i]} ${
                i === 1 ? "border-honey/40 bg-honey/[0.08]" : "border-wax/10 bg-comb/55"
              }`}
            >
              <div>
                <span aria-hidden className="block h-10 w-2.5 rounded-full bg-honey lg:h-14" style={{ opacity: i === 1 ? 1 : 0.55 }} />
                <h3 className="display mt-8 text-[clamp(2.25rem,4vw,3.5rem)] text-wax">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-wax/75">{c.body}</p>
              </div>
              <ul className="space-y-2.5 border-t border-wax/10 pt-6">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] text-wax/85 sm:text-base">
                    <span aria-hidden className="h-4 w-1.5 shrink-0 rounded-full bg-honey" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
