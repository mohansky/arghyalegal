export default function ServicesItem({ service }) {
  return (
    <>
      <li className="lg:w-5/6 mb-10">
        <h5 className="text-2xl mb-5 font-medium"> {service.title} </h5>
        <h6 className="mb-5 text-gray-900 text-justify"> {service.subtitle} </h6>
        <ul className="list-disc ml-3">
          {service.text.map((item, index) => (
            <li key={index} className="mb-2 text-justify">
              {item}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
