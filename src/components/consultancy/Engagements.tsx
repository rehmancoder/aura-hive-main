"use client";

import Link from "next/link";
import { useRef } from "react";
import { consultancy } from "@/lib/divisions";
import { engagementModels } from "@/lib/consultancy";
import { gsap, useGsap } from "@/lib/motion";
import { TiltCard } from "../motion/TiltCard";

/** The four engagement models, as cards that rise in a staggered wave. */
export function Engagements({ title, intro, id = "engagement" }: { title: string; intro: string; id?: string }) {
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-model]"), {
      y: 80,
      rotateX: -22,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: el.querySelector("[data-models]"), start: "top 85%" },
    });
  });

  return (
    <section ref={root} id={id} aria-labelledby={`${id}-title`} className="relative scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id={`${id}-title`} className="display max-w-3xl text-[clamp(2.75rem,7vw,6.5rem)] text-wax">
            {title}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-wax/70 sm:text-lg">{intro}</p>
        </div>

        <ul data-models className="mt-12 grid gap-4 [perspective:1400px] sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-5">
          {engagementModels.map((m, i) => (
            <li key={m.id} data-model className={i % 2 ? "lg:translate-y-10" : ""}>
              <TiltCard
                className={`h-full rounded-[24px] border p-6 backdrop-blur-md sm:p-7 md:rounded-[28px] ${
                  i === 2 ? "border-honey/40 bg-honey/[0.08]" : "border-wax/10 bg-comb/55"
                }`}
                innerClassName="flex h-full min-h-[19rem] flex-col justify-between gap-8"
              >
                <span className="text-sm font-medium text-honey">Model {String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-[clamp(2.25rem,3.4vw,3.25rem)] text-wax">{m.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-wax/75">{m.body}</p>
                  <p className="mt-5 border-t border-wax/10 pt-4 text-[15px] leading-snug text-wax/85">
                    <span className="font-semibold text-honey">Best for: </span>
                    {m.best}
                  </p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>

        <Link
          href={consultancy.contactHref()}
          className="mt-14 inline-block text-base font-semibold text-wax underline decoration-honey/60 underline-offset-[6px] transition-colors hover:text-honey lg:mt-20"
        >
          Not sure which fits? Ask in a free consultation
        </Link>
      </div>
    </section>
  );
}
