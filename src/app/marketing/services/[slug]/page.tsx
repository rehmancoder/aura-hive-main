import { ServicePage, serviceMetadata, serviceParams, type ServicePageProps } from "@/components/pages/ServicePage";

export function generateStaticParams() {
  return serviceParams("marketing");
}

export function generateMetadata(props: ServicePageProps) {
  return serviceMetadata("marketing", props);
}

export default function MarketingService({ params }: ServicePageProps) {
  return <ServicePage division="marketing" params={params} />;
}
