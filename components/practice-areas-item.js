import TitleThree from "./title-three";

export default function PracticesAreasItem({ practice }) {
  return (
    <>
      <section
        id={practice.id}
        className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-36"
      >
        <li className="lg:w-5/6 mb-10">
          <TitleThree className="mb-5"> {practice.title} </TitleThree>
          <h6 className="mb-5 text-gray-900 text-justify">
            {practice.subtitle}
          </h6>
          <ul className="list-disc ml-3">
            {practice.text.map((item, index) => (
              <li key={index} className="mb-2 text-justify">
                {item}
              </li>
            ))}
          </ul>
        </li>
      </section>
    </>
  );
}
