import { permanentRedirect } from "next/navigation";
import { services } from "@/lib/site";

// Old address: service pages now live at /marketing/services/[slug] (next.config.ts also redirects them).
// Safe to delete this folder.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Old({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`/marketing/services/${slug}`);
}
