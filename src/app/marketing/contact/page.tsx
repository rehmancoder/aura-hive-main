import { ContactPage, contactMetadata } from "@/components/pages/ContactPage";

export const metadata = contactMetadata("marketing");

export default function MarketingContact() {
  return <ContactPage division="marketing" />;
}
