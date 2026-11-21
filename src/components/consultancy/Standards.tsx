"use client";

import { useRef } from "react";
import { consultancyHome } from "@/lib/consultancy";
import { gsap, useGsap } from "@/lib/motion";
import { TiltCard } from "../motion/TiltCard";

/** One system, many standards: nine ISO tiles that flip up into place, then the path to certification. */
export function Standards() {
  const { standards } = consultancyHome;
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-iso]"), {
      y: 70,
      rotateX: -35,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: { each: 0.06, grid: "auto", from: "start" },
      scrollTrigger: { trigger: el.querySelector("[data-isos]"), start: "top 85%" },
    });
    gsap.fromTo(
      el.querySelector("[data-journey-line]"),
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: el.querySelector("[data-journey]"), start: "top 85%", end: "top 45%", scrub: true },
      },
    );
    gsap.from(el.querySelectorAll("[data-step]"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: el.querySelector("[data-journey]"), start: "top 85%" },
    });
  });

  return (
    <section ref={root} id="standards" aria-labelledby="standards-title" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="standards-title" className="display max-w-3xl text-[clamp(2.75rem,7vw,6.5rem)] text-wax">
            {standards.title}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-wax/70 sm:text-lg">{standards.intro}</p>
        </div>

        <ul data-isos className="mt-12 grid gap-3 [perspective:1400px] sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-4">
          {standards.items.map((s, i) => (
            <li key={s.code} data-iso>
              <TiltCard
                className={`h-full rounded-[22px] border p-6 backdrop-blur-md sm:p-7 md:rounded-[26px] ${
                  i === 0 ? "border-honey/40 bg-honey/[0.08]" : "border-wax/10 bg-comb/55"
                }`}
                innerClassName="flex h-full flex-col justify-between gap-8"
              >
                <span className="display text-[clamp(2.6rem,4.6vw,3.75rem)] text-honey">{s.code}</span>
                <span>
                  <span className="block text-lg font-semibold text-wax sm:text-xl">{s.name}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-wax/70 sm:text-base">{s.body}</span>
                </span>
              </TiltCard>
            </li>
          ))}
        </ul>

        <div data-journey className="mt-16 md:mt-24">
          <h3 className="text-xl font-semibold text-wax">The path to certification</h3>
          <div className="relative mt-8">
            <span aria-hidden className="absolute left-0 right-0 top-[0.9rem] hidden h-[2px] rounded-full bg-wax/12 lg:block">
              <span data-journey-line className="block h-full origin-left rounded-full bg-honey" />
            </span>
            <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              {standards.journey.map((step, i) => (
                <li key={step} data-step className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative flex h-[1.9rem] w-[1.9rem] shrink-0 items-center justify-center rounded-full border-2 border-honey bg-ink text-[13px] font-semibold text-honey">
                    {i + 1}
                  </span>
                  <span className="text-base font-medium text-wax sm:text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-wax/60 sm:text-base">{standards.note}</p>
        </div>
      </div>
    </section>
  );
}
