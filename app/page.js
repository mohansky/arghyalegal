import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Container from "@/components/container";
import QuicklinkList from "@/components/quicklink-list";
import MyModal from "@/components/modal";
import Form from "@/components/form";
import FAQs from "@/data/faq.json";

const Accordian = dynamic(() => import("@/components/accordian"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <MyModal />
      <Container className="py-32">
        <p className="lg:w-5/6 text-justify  leading-relaxed">
          Λrgħyä Legal is a boutique law firm based in Bangalore offering
          Corporate Advisory, Commercial Transaction, Contract Management,
          Regulatory Compliance, Training and Dispute Resolution services in the
          E-commerce, Information Technology, Manufacturing and Startup space.
          <br className="mb-5" />
          The firm was set up with two main objectives in mind. Firstly, to
          collaborate with in-house legal teams and work on a combination of
          work sharing models which enable them to increase their productivity
          and efficiency by focusing more on critical big ticket items having a
          huge revenue impact for their company. Secondly, support startup
          founders and leadership of small enterprises to grow their fast paced
          business in a structured and compliant manner by providing them with
          access to a transparent and cost effective legal ecosystem and
          managing their day to day business needs and risks from a legal
          standpoint.
          <br className="mb-5" />
          Our team has more than two decades of rich experience having practised
          in courts, worked with law firms and managing and leading legal
          departments of many multinational companies having exposure to both
          national and international business culture. Having worked in-house,
          the team not only understands the ecosystem but also has the ability
          to manage stakeholder expectations proactively.
          <br className="mb-5" />
          We understand the criticality of issues and its impact on business, so
          our goal is to provide practical and legally acceptable solutions for
          complex issues which suit the needs of our Clients with time being the
          essence.
          <br className="mb-5" />
          Integrity, Trust, Teamwork and Exclusivity are the cornerstones on
          which our firm stands.
        </p>
      </Container>
      <section className="bg-white">
        <Container className="py-20">
          <QuicklinkList />
        </Container>
      </section>

      <Container className="py-20 grid md:grid-cols-2">
        <div className="mb-20">
          <Form />
        </div>

        {/* <div className="mb-20">
          <h5 className="text-4xl mb-5">FAQ</h5>
          {FAQs.map((faq) => {
            return <Accordian key={faq.id} faq={faq} />;
          })}
        </div> */}
      </Container>
    </main>
  );
}
