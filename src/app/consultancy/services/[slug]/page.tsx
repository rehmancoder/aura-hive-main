import { ServicePage, serviceMetadata, serviceParams, type ServicePageProps } from "@/components/pages/ServicePage";

export function generateStaticParams() {
  return serviceParams("consultancy");
}

export function generateMetadata(props: ServicePageProps) {
  return serviceMetadata("consultancy", props);
}

export default function ConsultancyService({ params }: ServicePageProps) {
  return <ServicePage division="consultancy" params={params} />;
}
