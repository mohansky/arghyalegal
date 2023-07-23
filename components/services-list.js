import ServicesItem from "@/components/services-item";
import servicesData from "@/data/services.json";
import TitleTwo from "./title-two";

export default function ServicesList() {
  return (
    <>
      <TitleTwo>{servicesData.title}</TitleTwo>
      <ul className="grid gap-8">
        {servicesData.services.map((service) => (
          <ServicesItem key={service.id} service={service} />
        ))}
      </ul>
    </>
  );
}
