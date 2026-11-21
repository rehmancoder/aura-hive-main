import { ServicesPage, servicesMetadata } from "@/components/pages/ServicesPage";

export const metadata = servicesMetadata("consultancy");

export default function ConsultancyServices() {
  return <ServicesPage division="consultancy" />;
}
