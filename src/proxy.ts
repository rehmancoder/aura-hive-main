import { NextResponse, type NextRequest } from "next/server";
import { consultancyServices } from "@/lib/consultancy";
import { services } from "@/lib/site";

const slugs = {
  marketing: new Set<string>(services.map((s) => s.slug)),
  consultancy: new Set<string>(consultancyServices.map((s) => s.slug)),
};

/**
 * Unknown service addresses (e.g. /marketing/services/typo) get a real 404 before the page renders.
 * Without this, the service page's shared shell is served first with a 200 status,
 * which Google treats as a "soft 404" and Vercel would cache as a new page.
 */
export function proxy(request: NextRequest) {
  const [, side, , raw] = request.nextUrl.pathname.split("/");
  const slug = decodeURIComponent(raw ?? "");
  const known = side === "consultancy" ? slugs.consultancy : slugs.marketing;
  if (known.has(slug)) return NextResponse.next();
  return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
}

export const config = {
  matcher: ["/marketing/services/:slug", "/consultancy/services/:slug"],
};
