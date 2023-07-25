import ServicesItem from "@/components/services-item";
import servicesData from "@/data/services.json";
import TitleTwo from "./title-two";

export default function ServicesList() {
  return (
    <>
      <TitleTwo>{servicesData.title}</TitleTwo>
      <h3 className="mb-5 lg:w-5/6">{servicesData.subtitle}</h3>
      <ul className="grid gap-8">
        {servicesData.services.map((service) => (
          <ServicesItem key={service.id} service={service} />
        ))}
      </ul>
    </>
  );
}
