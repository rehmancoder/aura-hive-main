import { AboutPage, aboutMetadata } from "@/components/pages/AboutPage";

export const metadata = aboutMetadata("consultancy");

export default function ConsultancyAbout() {
  return <AboutPage division="consultancy" />;
}
