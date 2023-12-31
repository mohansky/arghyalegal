import Image from "next/image";
import TitleTwo from "./title-two";
import TitleThree from "./title-three";
import TitleFour from "./title-four";

export default function TeamItem({ team }) {
  return (
    <>
      <li key={team.name} className="mb-20">
        <div className="grid md:grid-cols-3 gap-x-6">
          <Image
            className="mb-5  p-5 rounded-full"
            src={team.image}
            alt={team.name}
            width={480}
            height={480}
            placeholder="blur"
            blurDataURL={team.imageBlurUrl}
     />
          <div className="md:col-span-2"> 
            <TitleThree>{team.name}</TitleThree> 
            <TitleFour>{team.role} </TitleFour>
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
