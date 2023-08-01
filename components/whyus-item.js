import TitleThree from "./title-three";

export default function WhyusItem({ whyus }) {
  return (
    <>
      <li className="bg-al-secondary p-8 h-full rounded-lg hover:shadow-md"> 
        <TitleThree> {whyus.title} </TitleThree>
        <p className="text-justify">{whyus.text}</p>
      </li>
    </>
  );
}
 