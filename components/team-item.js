import Image from "next/image";

export default function TeamItem({ team }) {
  return (
    <>
      <li key={team.name}>
        <div className="grid md:grid-cols-3 gap-x-6">
          <Image
            className="mb-5 rounded-sm"
            src={team.image}
            alt={team.name}
            width={480}
            height={360}
          />
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold leading-7  tracking-tight text-gray-900 mb-5">
              {team.name}
            </h3>
            {team.text.map((item, index) => (
              <p
                key={index}
                className="mb-2 text-justify"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
