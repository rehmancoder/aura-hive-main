import Link from "next/link";
import { getDivision, type DivisionId } from "@/lib/divisions";

type Crumb = { label: string; href?: string };

/** Home › Side › … › Current page. The last item is the page you're on. */
export function Breadcrumb({ division, trail }: { division: DivisionId; trail: Crumb[] }) {
  const d = getDivision(division);
  const items: Crumb[] = [{ label: "Home", href: "/" }, { label: d.short, href: d.base }, ...trail];
  return (
    <nav aria-label="Breadcrumb" className="fade-rise mb-6 text-sm text-wax/60" style={{ animationDelay: "var(--intro)" }}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden className="h-3 w-[2px] rounded-full bg-honey/60" /> : null}
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined} className={last ? "text-wax" : undefined}>
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-honey">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Breadcrumb trail for structured data, matching what's on screen. */
export function breadcrumbLd(siteUrl: string, division: DivisionId, trail: { name: string; path: string }[]) {
  const d = getDivision(division);
  const all = [{ name: "Home", path: "" }, { name: d.name, path: d.base }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: `${siteUrl}${x.path}` })),
  };
}
