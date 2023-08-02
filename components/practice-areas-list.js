import PracticesAreasItem from "@/components/practice-areas-item";
import PracticesData from "@/data/practice.json"; 

export default function PracticesAreasList() {
  return (
    <>
      <ul className="grid gap-8">
        {PracticesData.practices.map((practice) => (
          <PracticesAreasItem key={practice.id} practice={practice} />
        ))}
      </ul>
    </>
  );
}
