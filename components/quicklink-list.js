import QuicklinkItem from "@/components/quicklink-item";
import Quicklinks from "@/data/quicklinks.json";
import TitleTwo from "./title-two";

export default function QuicklinkList() {
  return (
    <>
      {/* <TitleTwo>{Quicklinks.title}</TitleTwo> */}
      <ul className="mx-auto grid md:grid-cols-3 gap-4">
        {Quicklinks.items.map((quicklink) => (
          <QuicklinkItem key={quicklink.id} quicklink={quicklink} />
        ))}
      </ul>
    </>
  );
}
