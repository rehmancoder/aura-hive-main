import { ContactPage, contactMetadata } from "@/components/pages/ContactPage";

export const metadata = contactMetadata("consultancy");

export default function ConsultancyContact() {
  return <ContactPage division="consultancy" />;
}
