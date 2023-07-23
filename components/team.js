import TeamItem from "./team-item";
import TeamData from "@/data/team.json";
import TitleTwo from "./title-two";

export default function Team() {
  return (
    <>
      <div className="max-w-2xl py-20">
        <TitleTwo>{TeamData.title}</TitleTwo>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          {TeamData.subtitle}
        </p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:gap-y-16">
        {TeamData.team.map((team) => (
          <TeamItem key={team.name} team={team} />
        ))}
      </ul>
    </>
  );
}
