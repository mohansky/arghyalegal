export default function ServicesItem({ service }) {
  return (
    <>
      <li className="lg:w-5/6">
        <h5 className="text-3xl mb-5 font-medium"> {service.title} </h5>
        <h6 className="text-2xl mb-5 text-gray-900"> {service.subtitle} </h6>
        <ol className="list-image-[url(/images/check-bold.svg)] list-inside">
          {service.text.map((item, index) => (
            <li key={index} className="mb-2 text-lg">
              {item}
            </li>
          ))}
        </ol>
      </li>
    </>
  );
}
