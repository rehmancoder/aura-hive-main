"use client";

import { useRef } from "react";
import { gsap, useGsap } from "@/lib/motion";
import { TiltCard } from "../motion/TiltCard";

type Team = {
  title: string;
  intro: string;
  people: readonly { name: string; role: string; body: string }[];
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

/** Leadership cards: a gold monogram, name, role and a short line on what each person leads. */
export function Team({ team }: { team: Team }) {
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-person]"), {
      y: 70,
      rotateX: -18,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: el.querySelector("[data-people]"), start: "top 85%" },
    });
  });

  return (
    <section ref={root} aria-labelledby="team-title" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="team-title" className="display text-[clamp(2.75rem,7vw,6.5rem)] text-wax">
            {team.title}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-wax/70 sm:text-lg">{team.intro}</p>
        </div>

        <ul data-people className="mt-12 grid gap-4 [perspective:1400px] md:mt-20 md:grid-cols-3 lg:gap-5">
          {team.people.map((p, i) => (
            <li key={p.name} data-person>
              <TiltCard
                className={`h-full rounded-[24px] border p-6 backdrop-blur-md sm:p-8 md:rounded-[32px] ${
                  i === 2 ? "border-wax/10 bg-ink/60" : "border-wax/10 bg-comb/60"
                }`}
                innerClassName="flex h-full flex-col gap-10"
              >
                {i < 2 ? (
                  <span
                    aria-hidden
                    className="display flex h-20 w-20 items-center justify-center rounded-full border border-honey/40 bg-honey/[0.08] text-[2.6rem] text-honey"
                  >
                    {initials(p.name)}
                  </span>
                ) : (
                  <span aria-hidden className="flex h-20 items-end gap-[5px]">
                    {[0.5, 0.8, 1, 0.7, 0.45].map((h, b) => (
                      <span key={b} className="eq-bar w-2 rounded-full bg-honey/80" style={{ height: `${h * 100}%`, animationDelay: `${b * 0.13}s` }} />
                    ))}
                  </span>
                )}
                <div>
                  <h3 className="display text-[clamp(2.25rem,3.6vw,3.25rem)] text-wax">{p.name}</h3>
                  <p className="mt-2 text-base font-medium text-honey">{p.role}</p>
                  <p className="mt-4 text-base leading-relaxed text-wax/75">{p.body}</p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
