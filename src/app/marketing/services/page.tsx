import { ServicesPage, servicesMetadata } from "@/components/pages/ServicesPage";

export const metadata = servicesMetadata("marketing");

export default function MarketingServices() {
  return <ServicesPage division="marketing" />;
}
