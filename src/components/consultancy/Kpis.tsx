"use client";

import { useRef } from "react";
import { consultancyHome } from "@/lib/consultancy";
import { gsap, useGsap } from "@/lib/motion";

/**
 * KPIs that make a contract measurable: example targets as rows that slide in,
 * then the four steps from KPI to enforceable result.
 */
export function Kpis() {
  const { kpis } = consultancyHome;
  const root = useRef<HTMLElement>(null);

  useGsap(root, (el) => {
    gsap.from(el.querySelectorAll("[data-row]"), {
      x: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: el.querySelector("[data-table]"), start: "top 80%" },
    });
    el.querySelectorAll<HTMLElement>("[data-meter]").forEach((m) => {
      gsap.fromTo(
        m,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: m, start: "top 92%" } },
      );
    });
    gsap.from(el.querySelectorAll("[data-flow]"), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: el.querySelector("[data-flows]"), start: "top 85%" },
    });
  });

  return (
    <section ref={root} id="kpis" data-stage="4" aria-labelledby="kpis-title" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="kpis-title" className="display text-[clamp(2.75rem,6.5vw,6rem)] text-wax">
            {kpis.title}
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-wax/70 sm:text-lg">{kpis.intro}</p>
        </div>

        <div data-table className="overflow-hidden rounded-[24px] border border-wax/10 bg-ink/70 backdrop-blur-md md:rounded-[28px]">
          <table className="w-full text-left">
            <caption className="sr-only">Example KPIs, targets and how each is measured</caption>
            <thead className="hidden text-sm text-wax/55 sm:table-header-group">
              <tr className="border-b border-wax/10">
                <th scope="col" className="px-6 py-4 font-medium md:px-8">KPI</th>
                <th scope="col" className="px-4 py-4 font-medium">Illustrative target</th>
                <th scope="col" className="px-6 py-4 font-medium md:px-8">Measured by</th>
              </tr>
            </thead>
            <tbody>
              {kpis.items.map((k, i) => (
                <tr
                  key={k.kpi}
                  data-row
                  className="grid gap-1 border-b border-wax/10 px-6 py-5 last:border-b-0 sm:table-row sm:px-0 sm:py-0"
                >
                  <th scope="row" className="text-base font-semibold text-wax sm:px-6 sm:py-5 md:px-8 md:text-lg">
                    {k.kpi}
                    <span aria-hidden className="mt-3 block h-[3px] w-full max-w-[10rem] overflow-hidden rounded-full bg-wax/10">
                      <span
                        data-meter
                        className="block h-full origin-left rounded-full bg-honey"
                        style={{ width: `${[95, 80, 90, 85, 70, 100, 75, 88][i % 8]}%` }}
                      />
                    </span>
                  </th>
                  <td className="text-[15px] font-medium text-honey sm:px-4 sm:py-5 sm:text-base">{k.target}</td>
                  <td className="text-[15px] text-wax/65 sm:px-6 sm:py-5 sm:text-base md:px-8">{k.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 md:mt-28">
        <h3 className="text-xl font-semibold text-wax">From KPI to enforceable result</h3>
        <ol data-flows className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-wax/10 bg-wax/10 sm:grid-cols-2 md:mt-8 md:rounded-[28px] lg:grid-cols-4">
          {kpis.steps.map((s, i) => (
            <li key={s.title} data-flow className="flex flex-col gap-6 bg-ink/80 p-6 backdrop-blur-md sm:p-7 md:p-8">
              <span className="display text-[clamp(2.75rem,5vw,4.5rem)] tabular-nums text-honey">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="text-xl font-semibold tracking-tight text-wax sm:text-2xl">{s.title}</h4>
                <p className="mt-2 text-base leading-relaxed text-wax/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-wax/70">{kpis.note}</p>
      </div>
    </section>
  );
}
