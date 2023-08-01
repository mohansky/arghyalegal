import WhyusItem from "@/components/whyus-item";
import WhyUs from "@/data/whyus.json";
import TitleTwo from "./title-two";

export default function WhyusList() {
  return (
    <>
      <TitleTwo>{WhyUs.title}</TitleTwo> 
      <ul className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
        {WhyUs.items.map((whyus) => (
          <WhyusItem key={whyus.id} whyus={whyus} />
        ))}
      </ul>
    </>
  );
}
