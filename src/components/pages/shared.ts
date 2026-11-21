import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Page metadata with canonical URL and matching Open Graph / Twitter text. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is (no " | Aura Hive" suffix added). */
  absoluteTitle?: boolean;
}): Metadata {
  const full = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title: full, description },
    twitter: { title: full, description },
  };
}

/** JSON-LD script contents, with "<" escaped so the data can't close the script tag. */
export const ld = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
