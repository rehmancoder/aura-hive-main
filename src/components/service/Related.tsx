"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGsap } from "@/lib/motion";
import type { Service } from "@/lib/site";
import { getDivision, groupOfIn, type DivisionId } from "@/lib/divisions";

/** The other services in the same group, plus a link back to all services. */
export function Related({ division, service }: { division: DivisionId; service: Service }) {
  const root = useRef<HTMLElement>(null);
  const d = getDivision(division);
  const group = groupOfIn(d, service.slug);
  const others = group.slugs.filter((s) => s !== service.slug).map((s) => d.services.find((x) => x.slug === s)!);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-related]"), {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  });

  return (
    <section ref={root} data-stage="3" aria-labelledby="related-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="related-title" className="display text-[clamp(2.75rem,6.5vw,6rem)] text-wax">
            Works well with
          </h2>
          <Link
            href={d.servicesPath}
            className="w-fit text-base font-semibold text-wax underline decoration-honey/60 underline-offset-[6px] transition-colors hover:text-honey"
          >
            See all {d.countWord} services
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {others.map((s) => (
            <li key={s.slug} data-related className={others.length === 1 ? "md:col-span-2" : undefined}>
              <Link
                href={d.servicePath(s.slug)}
                className="group relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-[24px] border border-wax/10 bg-comb/60 p-6 backdrop-blur-md transition-colors hover:border-honey/50 sm:p-8 md:rounded-[32px] md:p-10"
              >
                <span
                  aria-hidden
                  className="display text-outline pointer-events-none absolute -bottom-[0.15em] -right-[0.04em] select-none whitespace-nowrap text-[clamp(6rem,12vw,11rem)] leading-none opacity-30 transition-opacity duration-500 group-hover:opacity-80"
                >
                  {s.word}
                </span>
                <span className="relative text-sm font-medium text-honey">{group.title}</span>
                <span className="relative">
                  <span className="display block text-[clamp(2.4rem,4.4vw,4rem)] text-wax transition-colors group-hover:text-honey">
                    {s.title}
                  </span>
                  <span className="mt-3 block max-w-md text-base leading-relaxed text-wax/75">{s.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
