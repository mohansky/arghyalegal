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

          {practice.subtitle ? (
            <>
              {practice.subtitle.map((item, index) => (
                <h6 key={index} className="mb-5 text-gray-900 text-justify">
                  {item}
                </h6>
              ))}
              <ul className="list-disc ml-3 mb-5">
                {practice.text.map((item, index) => (
                  <li key={index} className="mb-2 text-justify">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {practice.subtitle2 ? (
            <h6 className="mb-5 text-gray-900 text-justify">
              {practice.subtitle2}
            </h6>
          ) : null}

          {practice.subtitle3 ? (
            <>
              <ul className="list-disc ml-3 mb-5">
                {practice.subtitle3.map((item, index) => (
                  <>
                    <h6
                      key={index}
                      className="mt-5 mb-1 font-bold text-gray-900 text-justify"
                    >
                      {item.text}
                    </h6>
                    <ul className="list-disc ml-3 mb-5">
                      {item.list.map((item, index) => (
                        <li key={index} className="mb-2 text-justify">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      </section>
    </>
  );
}
