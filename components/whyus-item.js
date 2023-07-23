export default function WhyusItem({whyus}) {
  return (
    <> 
      <li>
        <h5 className="text-3xl mb-5 font-medium"> {whyus.title} </h5>
        <p>{whyus.text}</p>
      </li>
    </>
  );
}
