import { permanentRedirect } from "next/navigation";

// Old address: it now lives at /marketing/about (next.config.ts also redirects it). Safe to delete this folder.
export default function Old() {
  permanentRedirect("/marketing/about");
}
