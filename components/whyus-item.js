export default function WhyusItem({whyus}) {
  return (
    <> 
      <li className="bg-al-secondary p-2 h-80">
        <h5 className="text-3xl mb-5 font-medium"> {whyus.title} </h5>
        <p className="text-justify">{whyus.text}</p>
      </li>
    </>
  );
}
