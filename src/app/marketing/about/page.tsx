import { AboutPage, aboutMetadata } from "@/components/pages/AboutPage";

export const metadata = aboutMetadata("marketing");

export default function MarketingAbout() {
  return <AboutPage division="marketing" />;
}
